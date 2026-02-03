"use strict";
function findSmallest(arr) {
  let smallest;
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length == 0) {
    return null;
  } else {
    arr.forEach((data, i) => {
      if (smallest == undefined) {
        smallest = data;
      } else {
        if (data < smallest) {
          smallest = data;
        }
      }
    });
  }
  return smallest;
}
console.log(findSmallest([0, 2, 3]));
