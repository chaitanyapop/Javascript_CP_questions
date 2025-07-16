// condition duplicate elements are in sorted order
function removeDuplicates(arr: number[]): number[] {
  arr = arr.sort();
  let properArrayMark = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[properArrayMark]) {
      arr[properArrayMark + 1] = arr[i];
      properArrayMark = properArrayMark + 1;
    }
  }
  arr.length = properArrayMark + 1;
  return arr;
}
console.log(removeDuplicates([1, 4, 3, 2, 1, 3]));
