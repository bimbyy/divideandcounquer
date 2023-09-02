function sortedFrequency(arr, num) {
    function findFirstOccurrence(){
        let left = 0;
        let right = arr.length -1;
        let result = -1;

        while (left <= right){
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === num){
                result = mid;
                right = mid - 1;
            } else if (arr[mid] < num){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    function findLastOccurence() {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right){
            const mid = Math.floor((left + right) / 2);

            if (arr[mid]=== num){
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < num){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    const FirstOccurrence = findFirstOccurrence();
    const lastOccurence = findLastOccurence();

    if (FirstOccurrence !== -1 && lastOccurence !== -1){
        return lastOccurence - FirstOccurrence + 1;
    }
    return 0;
}

module.exports = sortedFrequency