"use strict";
function SortAccArr(arr1, arr2) {
    let mapSet = new Map();
    for (let i = 0; i < arr2.length; i++) {
        mapSet.has(arr2[i]) ? "" : mapSet.set(arr2[i], i);
    }
    arr1.sort((a, b) => {
        let indexA = mapSet.has(a) ? mapSet.get(a) : Infinity;
        let indexB = mapSet.has(b) ? mapSet.get(b) : Infinity;
        if (indexA == indexB)
            return a - b;
        return indexA - indexB;
    });
    return arr1;
}
console.log(SortAccArr([4, 1, 3, 3, 2], [3, 1]));
