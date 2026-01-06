"use strict";
function unionDuplicates(a, b) {
    let elementsInArray = new Map();
    for (let i = 0; i < a.length; i++) {
        elementsInArray.has(a[i]) ? "" : elementsInArray.set(a[i], true);
    }
    for (let i = 0; i < b.length; i++) {
        elementsInArray.has(b[i]) ? "" : elementsInArray.set(b[i], true);
    }
    return [...elementsInArray.keys()];
}
console.log(unionDuplicates([1, 2, 3, 4], [2, 2, 3, 2, 2]));
