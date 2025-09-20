# Grand Opening Modal Test Flow

## Manual Test Instructions

### Setup
1. Open browser to http://localhost:3002
2. Open browser DevTools Console
3. Clear all storage: `localStorage.clear()` in console

### Test Case 1: Fresh User (Should See Modal After Age Verification)

1. **Clear State**
   ```javascript
   localStorage.clear()
   location.reload()
   ```

2. **Verify Age Gate Shows**
   - Age verification modal should appear

3. **Complete Age Verification**
   - Click "Yes, I am 21 or older"

4. **Expected Result**
   - Age verification modal closes
   - After ~1.5 seconds, Grand Opening modal should appear
   - Check console for: "Saved to localStorage"

### Test Case 2: Returning User (Already Age Verified)

1. **Setup**
   ```javascript
   localStorage.setItem('library_age_verified', 'true')
   localStorage.setItem('library_age_verified_timestamp', Date.now().toString())
   localStorage.removeItem('grandOpeningDismissed')
   location.reload()
   ```

2. **Expected Result**
   - No age verification modal (already verified)
   - Grand Opening modal appears after 1.5 seconds

### Test Case 3: User Who Dismissed Modal

1. **Setup**
   ```javascript
   localStorage.setItem('library_age_verified', 'true')
   localStorage.setItem('library_age_verified_timestamp', Date.now().toString())
   localStorage.setItem('grandOpeningDismissed', 'true')
   location.reload()
   ```

2. **Expected Result**
   - No age verification modal
   - No Grand Opening modal (already dismissed)

### Test Case 4: Cross-Tab Synchronization

1. **Setup Two Tabs**
   - Tab 1: Open http://localhost:3002
   - Tab 2: Open http://localhost:3002
   - Clear storage in both tabs

2. **Complete Age Verification in Tab 1**
   - Go through age verification in Tab 1

3. **Expected Result**
   - Tab 1: Grand Opening modal appears after age verification
   - Tab 2: Should detect storage change and show Grand Opening modal

## Debug Commands

```javascript
// Check current state
console.log({
  ageVerified: localStorage.getItem('library_age_verified'),
  modalDismissed: localStorage.getItem('grandOpeningDismissed'),
  timestamp: localStorage.getItem('library_age_verified_timestamp')
})

// Simulate age verification
localStorage.setItem('library_age_verified', 'true')
localStorage.setItem('library_age_verified_timestamp', Date.now().toString())
window.dispatchEvent(new StorageEvent('storage', {
  key: 'library_age_verified',
  newValue: 'true',
  storageArea: localStorage
}))

// Reset for testing
localStorage.removeItem('library_age_verified')
localStorage.removeItem('library_age_verified_timestamp')
localStorage.removeItem('grandOpeningDismissed')
location.reload()
```

## What Was Fixed

The issue was in the `checkAndShowModal` function. When the storage event fired (after age verification), the function was returning a timer reference but not actually starting it. The fix ensures:

1. Timer is properly declared in the useEffect scope
2. Timer is actually started when conditions are met
3. Previous timers are cleared to prevent duplicates
4. Modal triggers correctly after age verification completes