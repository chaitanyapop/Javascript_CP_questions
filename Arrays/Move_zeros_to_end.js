"use strict";
function moveZerosToEnd(arr) {
  let positionOfZero;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0 && positionOfZero != undefined) {
      arr[positionOfZero] = arr[i];
      arr[i] = 0;
      if (arr[positionOfZero + 1] == 0) {
        positionOfZero = positionOfZero + 1;
      } else {
        positionOfZero = i;
      }
    } else if (arr[i] == 0 && positionOfZero == undefined) {
      positionOfZero = i;
    }
  }
  return arr;
}
console.log(
  moveZerosToEnd([3, 3, 4, 0, 0, 0, 1, 2, 3, 0, 4, 0, 0, 5, 6, 0, 6])
);
