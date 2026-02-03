function countNegativeNums(arr: any) {
  if (arr == null) {
    return false;
  } else if (arr.length == 0) {
    return 0;
  } else {
    arr = arr.filter((value: any) => value < 0);
    return arr.length;
  }
}
console.log(countNegativeNums(null));
