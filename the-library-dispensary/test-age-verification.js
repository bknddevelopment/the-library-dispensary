/**
 * Age Verification Test Script
 * Run this script in the browser console to test the age verification functionality
 */

async function testAgeVerification() {
  console.log('=== Age Verification Test Suite ===\n');

  // Test 1: Check storage availability
  console.log('1. Storage Availability Check:');
  const storageTest = {
    localStorage: false,
    sessionStorage: false,
    indexedDB: false
  };

  try {
    localStorage.setItem('__test__', 'test');
    localStorage.removeItem('__test__');
    storageTest.localStorage = true;
  } catch (e) {}

  try {
    sessionStorage.setItem('__test__', 'test');
    sessionStorage.removeItem('__test__');
    storageTest.sessionStorage = true;
  } catch (e) {}

  if (window.indexedDB) {
    storageTest.indexedDB = true;
  }

  console.table(storageTest);

  // Test 2: Check current verification status
  console.log('\n2. Current Verification Status:');
  const isVerified = localStorage.getItem('library_age_verified') === 'true';
  const timestamp = localStorage.getItem('library_age_verified_timestamp');
  const userAgent = localStorage.getItem('library_age_verified_ua');

  console.log('- Is Verified:', isVerified);
  if (timestamp) {
    const date = new Date(parseInt(timestamp));
    console.log('- Verified at:', date.toLocaleString());
    const daysAgo = Math.floor((Date.now() - parseInt(timestamp)) / (1000 * 60 * 60 * 24));
    console.log('- Days ago:', daysAgo);
  }
  console.log('- User Agent:', userAgent ? userAgent.substring(0, 50) + '...' : 'Not set');

  // Test 3: Check grand opening popup status
  console.log('\n3. Grand Opening Popup Status:');
  const grandOpeningDismissed = localStorage.getItem('grandOpeningDismissed');
  console.log('- Dismissed:', grandOpeningDismissed === 'true');

  // Test 4: Clear verification (for testing)
  console.log('\n4. Clear Verification Test:');
  console.log('To clear age verification and test the popup, run:');
  console.log('clearAgeVerification()');

  // Test 5: Device detection
  console.log('\n5. Device Detection:');
  const ua = navigator.userAgent;
  const deviceInfo = {
    isMobile: /Mobile|Android|iPhone|iPad|iPod/i.test(ua),
    isIOS: /iPhone|iPad|iPod/i.test(ua),
    isAndroid: /Android/i.test(ua),
    platform: navigator.platform,
  };
  console.table(deviceInfo);

  console.log('\n=== Test Complete ===');
}

// Helper function to clear age verification for testing
window.clearAgeVerification = function() {
  console.log('Clearing age verification...');

  // Clear localStorage
  localStorage.removeItem('library_age_verified');
  localStorage.removeItem('library_age_verified_timestamp');
  localStorage.removeItem('library_age_verified_ua');

  // Clear sessionStorage
  sessionStorage.removeItem('library_age_verified');
  sessionStorage.removeItem('library_age_verified_timestamp');
  sessionStorage.removeItem('library_age_verified_ua');

  // Clear grand opening dismissed
  localStorage.removeItem('grandOpeningDismissed');

  console.log('✓ Age verification cleared');
  console.log('✓ Grand opening popup reset');
  console.log('Reload the page to see the age verification popup');
};

// Helper function to simulate age verification
window.simulateAgeVerification = function() {
  console.log('Simulating age verification...');

  const timestamp = Date.now().toString();
  localStorage.setItem('library_age_verified', 'true');
  localStorage.setItem('library_age_verified_timestamp', timestamp);
  localStorage.setItem('library_age_verified_ua', navigator.userAgent);

  console.log('✓ Age verification set');
  console.log('Reload the page to bypass the age verification popup');
};

// Run the test automatically
testAgeVerification();