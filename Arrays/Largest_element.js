"use strict";
function findLargest(array) {
    let largest = 0;
    let largestIndex = 0;
    array.forEach((element, i) => {
        if (element > largest) {
            largest = element;
            largestIndex = i;
        }
    });
    return largestIndex;
}
console.log(findLargest([40, 8, 7750, 1000, 1]));
