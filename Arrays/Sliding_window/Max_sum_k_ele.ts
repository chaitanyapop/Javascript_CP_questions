function maxKElements(arr: number[], k: number) {
  let sum = 0;
  let res = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
    res = sum;
  }
  for (let i = k; i < arr.length; i++) {
    res = res + arr[i] - arr[i - k];
    sum = Math.max(sum, res);
  }
  return sum;
}

console.log(maxKElements([-5, -2, -3, -1], 2));
