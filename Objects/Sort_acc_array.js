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
/**
 * approach ->
 * mapSet.has(arr2[i]) ? "" : mapSet.set(arr2[i], i);
 * Here we have stored the index position of the elements present in arr2 so that we can sort elemnets later in ascending order
 * on the basis of index position. If index is less then should come first and then in increasing order
 *
 *  arr1.sort((a: any, b: any) => {
    let indexA = mapSet.has(a) ? mapSet.get(a) : Infinity;
    let indexB = mapSet.has(b) ? mapSet.get(b) : Infinity;
    if (indexA == indexB) return a - b;
    return indexA - indexB;
  });

  here in indexA and indexB we have found the index position of an element stored in the mapSet.

  3 scenarios -
  1) If indexA and indexB has some values means they are in arr2 so sort them in ascending order indexA-indexB
  2) If both A and B are not present in arr2 then sort in ascending order on the basis of value a and b therefore a-b
  3) If one is present and one is not
  e.g indexA = infinity and indexB = 2  -> indexA-indexB = infinity - 2 = +ve value then swap a,b => b,a b should come first and a later
  indexA = 2 and indexB = infinity -> indexA-indexB = 2 - infinity = -ve value a should come first and b later
 */
