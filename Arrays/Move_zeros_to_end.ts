function moveZerosToEnd(arr: number[]): number[] {
  let positionOfZero;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0 && positionOfZero != undefined) {
      arr[positionOfZero] = arr[i];
      arr[i] = 0;
      positionOfZero = i;
    } else if (arr[i] == 0 && positionOfZero == undefined) {
      positionOfZero = i;
    }
  }
  return arr;
}
console.log(moveZerosToEnd([0, 0, 0, 10, 0]));
