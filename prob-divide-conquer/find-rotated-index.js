function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid; // Number found at index mid
      }
  
      // Check if the left half is sorted
      if (arr[left] <= arr[mid]) {
        if (arr[left] <= num && num < arr[mid]) {
          right = mid - 1; // Search in the left half
        } else {
          left = mid + 1; // Search in the right half
        }
      }
      // If the left half is not sorted, then the right half must be sorted
      else {
        if (arr[mid] < num && num <= arr[right]) {
          left = mid + 1; // Search in the right half
        } else {
          right = mid - 1; // Search in the left half
        }
      }
    }
  
    return -1; // Number not found in the array
  } 


module.exports = findRotatedIndex