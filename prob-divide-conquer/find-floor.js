function findFloor() {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor as -1
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid]; // x is found in the array, return x as the floor
      } else if (arr[mid] < x) {
        floor = arr[mid]; // Update floor to the current element
        left = mid + 1; // Search in the right half for a smaller floor
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return floor;  
}

module.exports = findFloor