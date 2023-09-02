function countZeroes(arr) {
  let count = 0;

  for (let i =0; i < arr.length; i++){
    if (arr[i]=== 0){
        count++;
    } else {
        //Since we want the numbre of 1's and 0's we can break as soon as we hit zeros in order to get the count
        break;
    }
  }
  return count;
}
module.exports = countZeroes