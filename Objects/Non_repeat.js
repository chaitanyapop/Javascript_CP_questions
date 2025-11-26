"use strict";
function nonRepeat(arr) {
  let nonRepeatCount = [];
  let objectOfFrequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (objectOfFrequency[arr[i]] == undefined) {
      objectOfFrequency[arr[i]] = 1;
    } else {
      objectOfFrequency[arr[i]] = objectOfFrequency[arr[i]] + 1;
    }
  }
  Object.keys(objectOfFrequency).forEach((val) => {
    if (objectOfFrequency[val] == 1) {
      nonRepeatCount.push(Number(val));
    }
  });
  return nonRepeatCount;
}
console.log(nonRepeat([1, 1, 1, 1, 1]));
