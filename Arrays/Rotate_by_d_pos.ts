function rotateByDpos(arr: number[], d: number): number[] {
  d = d % arr.length;
  arr = arrayRotation(arr, 0, d - 1); // first rotate d-1 element
  arr = arrayRotation(arr, d, arr.length - 1); // then rotate d to length-1 elements
  arr = arrayRotation(arr, 0, arr.length - 1); // rotate whole array
  return arr;
}

function arrayRotation(arr: number[], start: number, end: number): number[] {
  let temp = 0;
  while (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(rotateByDpos([2, 4, 6, 8, 10], 32));

// This is array of reversal algorithm
