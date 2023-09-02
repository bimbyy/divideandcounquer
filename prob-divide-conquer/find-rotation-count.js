function findRotationCount() {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is already sorted, the rotation count is 0
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length; // Calculate the index of the next element
  
      // If the mid element is greater than the next element, the next element is the minimum
      if (arr[mid] > arr[next]) {
        return next;
      }
  
      // Decide which half to search based on which half is unsorted
      if (arr[left] <= arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;  
}

module.exports = findRotationCount