"use strict";
function zeroSumSubArray(arr) {
    let prefixMap = new Map();
    let count = 0;
    let prefixSum = 0;
    prefixMap.set(0, 1);
    for (let i = 0; i < arr.length; i++) {
        prefixSum = prefixSum + arr[i];
        if (prefixMap.has(prefixSum)) {
            count = count + prefixMap.get(prefixSum);
            prefixMap.set(prefixSum, prefixMap.get(prefixSum) + 1);
        }
        else {
            prefixMap.set(prefixSum, 1);
        }
    }
    return count;
}
console.log(zeroSumSubArray([0, 0, 5, 5, 0, 0]));
