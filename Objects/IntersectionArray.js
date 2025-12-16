"use strict";
function interSectionArray(a, b) {
    let map = new Map();
    let interSection = 0;
    for (let i = 0; i < a.length; i++) {
        map.set(a[i], 1);
    }
    for (let i = 0; i < b.length; i++) {
        map.has(b[i]) ? interSection++ : "";
    }
    return interSection;
}
console.log(interSectionArray([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7]));
