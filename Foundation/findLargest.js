"use strict";
function findLargest(arr) {
    let largest;
    if (!Array.isArray(arr)) {
        return false;
    }
    else if (arr.length == 0) {
        return null;
    }
    else {
        arr.forEach((data, i) => {
            if (largest == undefined) {
                largest = data;
            }
            else {
                if (data > largest) {
                    largest = data;
                }
            }
        });
    }
    return largest;
}
console.log(findLargest([-5, 2, -3, 4]));
