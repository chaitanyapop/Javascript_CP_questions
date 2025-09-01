"use strict";
function Maximum_difference(arr) {
    let maxDifference = 0;
    let j = arr.length - 1;
    let i = arr.length - 2;
    while (i >= 0) {
        if (arr[j] > arr[i]) {
            maxDifference = Math.max(maxDifference, arr[j] - arr[i]);
            i--;
        }
        else {
            j = i;
            i = i - 1;
        }
    }
    return maxDifference;
}
console.log(Maximum_difference([20, 28, 30, 5, 25]));
