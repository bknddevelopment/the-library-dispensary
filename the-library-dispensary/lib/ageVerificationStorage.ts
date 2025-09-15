/**
 * Age Verification Storage Utility - Production Grade v2.0
 * Provides robust storage solution with comprehensive fallbacks for mobile and desktop browsers
 * Handles edge cases like private browsing, storage disabled, iOS quirks, Android WebView
 *
 * Storage Priority (Mobile-First):
 * 1. localStorage (persistent across sessions)
 * 2. IndexedDB (for browsers with storage restrictions)
 * 3. sessionStorage (fallback for same session)
 * 4. Memory (last resort)
 */

const STORAGE_KEY = 'library_age_verified';
const STORAGE_TIMESTAMP_KEY = 'library_age_verified_timestamp';
const STORAGE_USER_AGENT_KEY = 'library_age_verified_ua';
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days for better UX

// In-memory fallback for when storage is not available
const memoryStorage: { [key: string]: string } = {};

// Debug logging (only in development)
const log = (message: string, data?: unknown) => {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log(`[AgeVerification] ${message}`, data || '');
  }
};

/**
 * Test if storage is available and working
 */
function isStorageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
  try {
    const storage = window[type];
    const testKey = '__test__';
    storage.setItem(testKey, 'test');
    storage.removeItem(testKey);
    return true;
  } catch (e) {
    // Storage is not available (private browsing, disabled, quota exceeded, etc.)
    return false;
  }
}

/**
 * Get storage method with fallback chain
 * Priority: localStorage -> sessionStorage -> memory
 * Changed priority to favor localStorage for better mobile persistence
 */
function getStorage(): Storage | null {
  if (typeof window === 'undefined') return null;

  // Try localStorage first (better for mobile persistence)
  if (isStorageAvailable('localStorage')) {
    log('Using localStorage');
    return window.localStorage;
  }

  // Fall back to sessionStorage if localStorage isn't available
  if (isStorageAvailable('sessionStorage')) {
    log('Falling back to sessionStorage');
    return window.sessionStorage;
  }

  // No storage available
  log('No browser storage available, using memory');
  return null;
}

/**
 * Safe storage setter with fallbacks
 */
function safeSetItem(key: string, value: string): void {
  try {
    const storage = getStorage();
    if (storage) {
      storage.setItem(key, value);
    } else {
      // Fall back to memory storage
      memoryStorage[key] = value;
    }
  } catch (e) {
    // Even if getStorage() returned a storage object, the setItem might fail
    // (e.g., quota exceeded). Fall back to memory storage.
    memoryStorage[key] = value;
  }
}

/**
 * Safe storage getter with fallbacks
 */
function safeGetItem(key: string): string | null {
  try {
    const storage = getStorage();
    if (storage) {
      return storage.getItem(key);
    } else {
      // Fall back to memory storage
      return memoryStorage[key] || null;
    }
  } catch (e) {
    // Fall back to memory storage
    return memoryStorage[key] || null;
  }
}

/**
 * Safe storage remover with fallbacks
 */
function safeRemoveItem(key: string): void {
  try {
    const storage = getStorage();
    if (storage) {
      storage.removeItem(key);
    }
    // Also clear from memory storage
    delete memoryStorage[key];
  } catch (e) {
    // Just clear from memory storage
    delete memoryStorage[key];
  }
}

/**
 * IndexedDB wrapper for additional persistence layer
 */
class IndexedDBWrapper {
  private dbName = 'libraryAgeVerification';
  private storeName = 'verification';
  private db: IDBDatabase | null = null;

  async init(): Promise<boolean> {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return false;
    }

    try {
      return new Promise((resolve) => {
        const request = indexedDB.open(this.dbName, 1);

        request.onerror = () => {
          log('IndexedDB initialization failed');
          resolve(false);
        };

        request.onsuccess = () => {
          this.db = request.result;
          log('IndexedDB initialized successfully');
          resolve(true);
        };

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName);
          }
        };
      });
    } catch (e) {
      log('IndexedDB not available:', e);
      return false;
    }
  }

  async save(key: string, value: string): Promise<boolean> {
    if (!this.db) {
      const initialized = await this.init();
      if (!initialized) return false;
    }

    try {
      return new Promise((resolve) => {
        const transaction = this.db!.transaction([this.storeName], 'readwrite');
        const store = transaction.objectStore(this.storeName);
        const request = store.put(value, key);

        request.onsuccess = () => {
          log('Saved to IndexedDB:', key);
          resolve(true);
        };

        request.onerror = () => {
          log('Failed to save to IndexedDB');
          resolve(false);
        };
      });
    } catch (e) {
      log('IndexedDB save error:', e);
      return false;
    }
  }

  async get(key: string): Promise<string | null> {
    if (!this.db) {
      const initialized = await this.init();
      if (!initialized) return null;
    }

    try {
      return new Promise((resolve) => {
        const transaction = this.db!.transaction([this.storeName], 'readonly');
        const store = transaction.objectStore(this.storeName);
        const request = store.get(key);

        request.onsuccess = () => {
          const result = request.result as string | undefined;
          log('Retrieved from IndexedDB:', key, result ? 'found' : 'not found');
          resolve(result || null);
        };

        request.onerror = () => {
          log('Failed to get from IndexedDB');
          resolve(null);
        };
      });
    } catch (e) {
      log('IndexedDB get error:', e);
      return null;
    }
  }

  async remove(key: string): Promise<void> {
    if (!this.db) return;

    try {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      store.delete(key);
    } catch (e) {
      log('IndexedDB remove error:', e);
    }
  }
}

const indexedDB = new IndexedDBWrapper();

/**
 * Save age verification status with multiple storage layers
 */
export async function saveAgeVerification(): Promise<void> {
  const timestamp = Date.now().toString();
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';

  log('Saving age verification', { timestamp, userAgent });

  // Primary save to localStorage/sessionStorage
  safeSetItem(STORAGE_KEY, 'true');
  safeSetItem(STORAGE_TIMESTAMP_KEY, timestamp);
  safeSetItem(STORAGE_USER_AGENT_KEY, userAgent);

  // Ensure it's in localStorage for persistence
  try {
    if (typeof window !== 'undefined' && isStorageAvailable('localStorage')) {
      window.localStorage.setItem(STORAGE_KEY, 'true');
      window.localStorage.setItem(STORAGE_TIMESTAMP_KEY, timestamp);
      window.localStorage.setItem(STORAGE_USER_AGENT_KEY, userAgent);
      log('Saved to localStorage');
    }
  } catch (e) {
    log('localStorage save failed:', e);
  }

  // Also save to IndexedDB as additional backup
  try {
    await indexedDB.save(STORAGE_KEY, 'true');
    await indexedDB.save(STORAGE_TIMESTAMP_KEY, timestamp);
    await indexedDB.save(STORAGE_USER_AGENT_KEY, userAgent);
    log('Saved to IndexedDB');
  } catch (e) {
    log('IndexedDB save failed:', e);
  }

  // Broadcast to other tabs/windows
  try {
    if (typeof window !== 'undefined' && window.BroadcastChannel) {
      const channel = new BroadcastChannel('age_verification');
      channel.postMessage({ verified: true, timestamp });
      channel.close();
      log('Broadcasted to other tabs');
    }
  } catch (e) {
    log('BroadcastChannel failed:', e);
  }
}

/**
 * Check if age verification is valid with comprehensive fallback chain
 */
export async function isAgeVerified(): Promise<boolean> {
  log('Checking age verification status');

  // Helper function to validate timestamp
  const isValidTimestamp = (timestamp: string | null): boolean => {
    if (!timestamp) return false;
    const verifiedTime = parseInt(timestamp, 10);
    const now = Date.now();
    return (now - verifiedTime) < SESSION_DURATION_MS;
  };

  // 1. Check primary storage (localStorage or sessionStorage)
  const verified = safeGetItem(STORAGE_KEY);
  const timestamp = safeGetItem(STORAGE_TIMESTAMP_KEY);

  if (verified === 'true' && isValidTimestamp(timestamp)) {
    log('Verified from primary storage');
    return true;
  }

  // 2. Check localStorage directly (in case primary is sessionStorage)
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localVerified = window.localStorage.getItem(STORAGE_KEY);
      const localTimestamp = window.localStorage.getItem(STORAGE_TIMESTAMP_KEY);

      if (localVerified === 'true' && isValidTimestamp(localTimestamp)) {
        log('Verified from localStorage backup');
        // Restore to primary storage for faster access
        safeSetItem(STORAGE_KEY, 'true');
        safeSetItem(STORAGE_TIMESTAMP_KEY, localTimestamp!);
        return true;
      }
    }
  } catch (e) {
    log('localStorage check failed:', e);
  }

  // 3. Check IndexedDB as last resort
  try {
    const indexedVerified = await indexedDB.get(STORAGE_KEY);
    const indexedTimestamp = await indexedDB.get(STORAGE_TIMESTAMP_KEY);

    if (indexedVerified === 'true' && isValidTimestamp(indexedTimestamp)) {
      log('Verified from IndexedDB backup');
      // Restore to all storage layers
      safeSetItem(STORAGE_KEY, 'true');
      safeSetItem(STORAGE_TIMESTAMP_KEY, indexedTimestamp!);

      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          window.localStorage.setItem(STORAGE_KEY, 'true');
          window.localStorage.setItem(STORAGE_TIMESTAMP_KEY, indexedTimestamp!);
        } catch (e) {
          // Ignore
        }
      }

      return true;
    }
  } catch (e) {
    log('IndexedDB check failed:', e);
  }

  // 4. Check memory storage as final fallback
  const memVerified = memoryStorage[STORAGE_KEY];
  const memTimestamp = memoryStorage[STORAGE_TIMESTAMP_KEY];

  if (memVerified === 'true' && isValidTimestamp(memTimestamp)) {
    log('Verified from memory storage');
    return true;
  }

  log('Not verified');
  return false;
}

/**
 * Synchronous version for backward compatibility
 */
export function isAgeVerifiedSync(): boolean {
  log('Checking age verification status (sync)');

  const isValidTimestamp = (timestamp: string | null): boolean => {
    if (!timestamp) return false;
    const verifiedTime = parseInt(timestamp, 10);
    const now = Date.now();
    return (now - verifiedTime) < SESSION_DURATION_MS;
  };

  // Check all synchronous storage options
  const verified = safeGetItem(STORAGE_KEY);
  const timestamp = safeGetItem(STORAGE_TIMESTAMP_KEY);

  if (verified === 'true' && isValidTimestamp(timestamp)) {
    return true;
  }

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localVerified = window.localStorage.getItem(STORAGE_KEY);
      const localTimestamp = window.localStorage.getItem(STORAGE_TIMESTAMP_KEY);

      if (localVerified === 'true' && isValidTimestamp(localTimestamp)) {
        safeSetItem(STORAGE_KEY, 'true');
        safeSetItem(STORAGE_TIMESTAMP_KEY, localTimestamp!);
        return true;
      }
    }
  } catch (e) {
    // Ignore
  }

  const memVerified = memoryStorage[STORAGE_KEY];
  const memTimestamp = memoryStorage[STORAGE_TIMESTAMP_KEY];

  if (memVerified === 'true' && isValidTimestamp(memTimestamp)) {
    return true;
  }

  return false;
}

/**
 * Clear age verification from all storage layers
 */
export async function clearAgeVerification(): Promise<void> {
  safeRemoveItem(STORAGE_KEY);
  safeRemoveItem(STORAGE_TIMESTAMP_KEY);

  // Clear from localStorage
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(STORAGE_TIMESTAMP_KEY);
      window.localStorage.removeItem(STORAGE_USER_AGENT_KEY);
    }
  } catch (e) {
    log('localStorage clear failed:', e);
  }

  // Clear from IndexedDB
  try {
    await indexedDB.remove(STORAGE_KEY);
    await indexedDB.remove(STORAGE_TIMESTAMP_KEY);
    await indexedDB.remove(STORAGE_USER_AGENT_KEY);
  } catch (e) {
    log('IndexedDB clear failed:', e);
  }

  log('Age verification cleared');
}

/**
 * Initialize storage check (useful for debugging)
 */
export function getStorageInfo(): {
  sessionStorageAvailable: boolean;
  localStorageAvailable: boolean;
  indexedDBAvailable: boolean;
  usingMemoryFallback: boolean;
  isVerified: boolean;
  userAgent: string;
  isMobile: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  storageRestricted: boolean;
} {
  const ua = typeof window !== 'undefined' ? window.navigator.userAgent : '';
  const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  // Check if storage is restricted (iOS Safari Private Mode, etc.)
  let storageRestricted = false;
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const testKey = '__test_restriction__';
      window.localStorage.setItem(testKey, 'test');
      window.localStorage.removeItem(testKey);
    }
  } catch (e) {
    storageRestricted = true;
  }

  return {
    sessionStorageAvailable: typeof window !== 'undefined' && isStorageAvailable('sessionStorage'),
    localStorageAvailable: typeof window !== 'undefined' && isStorageAvailable('localStorage'),
    indexedDBAvailable: typeof window !== 'undefined' && !!window.indexedDB,
    usingMemoryFallback: typeof window !== 'undefined' && !getStorage(),
    isVerified: isAgeVerifiedSync(),
    userAgent: ua,
    isMobile,
    isIOS,
    isAndroid,
    storageRestricted
  };
}