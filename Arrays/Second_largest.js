"use strict";
function secondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;
    let secondIndex = 0;
    arr.forEach((element, i) => {
        if (element > largest) {
            secondLargest = largest;
            largest = element;
            secondIndex = arr.indexOf(secondLargest);
        }
        else if (element < largest && element > secondLargest) {
            secondLargest = element;
            secondIndex = i;
        }
    });
    return secondIndex;
}
console.log(secondLargest([10, 5, 8, 20]));
