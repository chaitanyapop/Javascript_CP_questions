function Reverse_array(arr: number[]): number[] {
  let lastIndex = arr.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    let temp = arr[i];
    arr[i] = arr[lastIndex];
    arr[lastIndex] = temp;
    lastIndex--;
  }

  return arr;
}
console.log(Reverse_array([-1, 2]));
