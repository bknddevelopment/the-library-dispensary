import { useState, useEffect } from 'react';
import { getStorageInfo, isAgeVerifiedSync, saveAgeVerification, clearAgeVerification } from '@/lib/ageVerificationStorage';
import { AlertCircle, CheckCircle, XCircle, RefreshCw, Smartphone, Monitor } from 'lucide-react';

export default function TestMobileVerification() {
  const [storageInfo, setStorageInfo] = useState<ReturnType<typeof getStorageInfo> | null>(null);
  const [testResults, setTestResults] = useState<{ name: string; status: 'pass' | 'fail' | 'warning'; message: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    updateStorageInfo();
  }, []);

  const updateStorageInfo = () => {
    const info = getStorageInfo();
    setStorageInfo(info);
  };

  const runTests = async () => {
    setIsRunning(true);
    const results: typeof testResults = [];

    // Test 1: Device Detection
    const deviceTest = {
      name: 'Device Detection',
      status: 'pass' as const,
      message: storageInfo?.isMobile
        ? `Mobile device detected: ${storageInfo.isIOS ? 'iOS' : storageInfo.isAndroid ? 'Android' : 'Other'}`
        : 'Desktop device detected'
    };
    results.push(deviceTest);

    // Test 2: Storage Availability
    const storageTest = {
      name: 'Storage Availability',
      status: 'pass' as const,
      message: ''
    };

    if (storageInfo?.localStorageAvailable) {
      storageTest.message += 'localStorage: ✅ ';
    } else {
      storageTest.status = 'warning';
      storageTest.message += 'localStorage: ❌ ';
    }

    if (storageInfo?.sessionStorageAvailable) {
      storageTest.message += 'sessionStorage: ✅ ';
    } else {
      storageTest.message += 'sessionStorage: ❌ ';
    }

    if (storageInfo?.indexedDBAvailable) {
      storageTest.message += 'IndexedDB: ✅';
    } else {
      storageTest.message += 'IndexedDB: ❌';
    }

    results.push(storageTest);

    // Test 3: Storage Restrictions
    const restrictionTest = {
      name: 'Storage Restrictions',
      status: storageInfo?.storageRestricted ? 'warning' as const : 'pass' as const,
      message: storageInfo?.storageRestricted
        ? '⚠️ Storage is restricted (likely private browsing mode)'
        : '✅ No storage restrictions detected'
    };
    results.push(restrictionTest);

    // Test 4: Save and Retrieve Test
    const saveTest = {
      name: 'Save & Retrieve Test',
      status: 'pass' as const,
      message: ''
    };

    try {
      // Clear first
      await clearAgeVerification();

      // Save
      await saveAgeVerification();
      saveTest.message = 'Saved successfully. ';

      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 100));

      // Check if it persists
      const verified = isAgeVerifiedSync();
      if (verified) {
        saveTest.message += 'Retrieved successfully ✅';
      } else {
        saveTest.status = 'fail';
        saveTest.message += 'Failed to retrieve ❌';
      }
    } catch (error) {
      saveTest.status = 'fail';
      saveTest.message = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }

    results.push(saveTest);

    // Test 5: Memory Fallback
    const memoryTest = {
      name: 'Memory Fallback',
      status: storageInfo?.usingMemoryFallback ? 'warning' as const : 'pass' as const,
      message: storageInfo?.usingMemoryFallback
        ? '⚠️ Using memory fallback (verification won\'t persist)'
        : '✅ Using persistent storage'
    };
    results.push(memoryTest);

    // Test 6: Cross-Tab Support
    const crossTabTest = {
      name: 'Cross-Tab Sync',
      status: 'pass' as const,
      message: typeof BroadcastChannel !== 'undefined'
        ? '✅ BroadcastChannel available'
        : '⚠️ BroadcastChannel not available (using storage events)'
    };
    if (typeof BroadcastChannel === 'undefined') {
      crossTabTest.status = 'warning';
    }
    results.push(crossTabTest);

    setTestResults(results);
    setIsRunning(false);
    updateStorageInfo();
  };

  const handleClearStorage = async () => {
    await clearAgeVerification();
    updateStorageInfo();
    setTestResults([]);
  };

  const handleVerifyAge = async () => {
    await saveAgeVerification();
    updateStorageInfo();
  };

  return (
    <div className="min-h-screen bg-library-brown p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-library-gold mb-8">Mobile Age Verification Test Suite</h1>

        {/* Device Info Card */}
        <div className="bg-library-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            {storageInfo?.isMobile ? (
              <Smartphone className="w-6 h-6 text-library-emerald" />
            ) : (
              <Monitor className="w-6 h-6 text-library-emerald" />
            )}
            <h2 className="text-xl font-semibold text-library-ink">Device Information</h2>
          </div>

          {storageInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Device Type:</span>{' '}
                  {storageInfo.isMobile ? 'Mobile' : 'Desktop'}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Platform:</span>{' '}
                  {storageInfo.isIOS ? 'iOS' : storageInfo.isAndroid ? 'Android' : 'Other'}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Verified:</span>{' '}
                  {storageInfo.isVerified ? '✅ Yes' : '❌ No'}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">localStorage:</span>{' '}
                  {storageInfo.localStorageAvailable ? '✅ Available' : '❌ Not Available'}
                </p>
                <p className="text-sm">
                  <span className="font-medium">sessionStorage:</span>{' '}
                  {storageInfo.sessionStorageAvailable ? '✅ Available' : '❌ Not Available'}
                </p>
                <p className="text-sm">
                  <span className="font-medium">IndexedDB:</span>{' '}
                  {storageInfo.indexedDBAvailable ? '✅ Available' : '❌ Not Available'}
                </p>
              </div>
            </div>
          )}

          {storageInfo?.storageRestricted && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <p className="text-sm text-yellow-800">
                  Storage is restricted. This might be due to private browsing mode or strict privacy settings.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Test Controls */}
        <div className="bg-library-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-library-ink mb-4">Test Controls</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={runTests}
              disabled={isRunning}
              className="px-4 py-2 bg-library-emerald text-white rounded-lg hover:bg-library-emerald/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
              Run Tests
            </button>
            <button
              onClick={handleVerifyAge}
              className="px-4 py-2 bg-library-gold text-white rounded-lg hover:bg-library-gold/90"
            >
              Simulate Age Verification
            </button>
            <button
              onClick={handleClearStorage}
              className="px-4 py-2 bg-library-burgundy text-white rounded-lg hover:bg-library-burgundy/90"
            >
              Clear Storage
            </button>
            <button
              onClick={updateStorageInfo}
              className="px-4 py-2 bg-library-brown text-white rounded-lg hover:bg-library-brown/90"
            >
              Refresh Info
            </button>
          </div>
        </div>

        {/* Test Results */}
        {testResults.length > 0 && (
          <div className="bg-library-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-library-ink mb-4">Test Results</h2>
            <div className="space-y-3">
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    result.status === 'pass'
                      ? 'bg-green-50 border-green-200'
                      : result.status === 'warning'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {result.status === 'pass' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : result.status === 'warning' ? (
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-library-ink">{result.name}</h3>
                      <p className="text-sm text-library-ink/70 mt-1">{result.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-library-emerald/10 border border-library-emerald/20 rounded-lg">
              <h3 className="font-medium text-library-ink mb-2">Test Summary</h3>
              <p className="text-sm text-library-ink/70">
                Passed: {testResults.filter(r => r.status === 'pass').length} |
                Warnings: {testResults.filter(r => r.status === 'warning').length} |
                Failed: {testResults.filter(r => r.status === 'fail').length}
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-library-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-library-ink mb-4">Testing Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-library-ink/80">
            <li>Click &quot;Run Tests&quot; to check storage capabilities on your device</li>
            <li>Click &quot;Simulate Age Verification&quot; to save verification status</li>
            <li>Navigate to another page and return to see if verification persists</li>
            <li>Try closing and reopening the browser to test persistence</li>
            <li>Test in both normal and private/incognito mode</li>
            <li>On mobile, test after killing the app from memory</li>
          </ol>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Mobile Testing Tip:</strong> If verification doesn&apos;t persist, check if you&apos;re in private browsing mode
              or if your browser settings are blocking storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}