//sliding window technique
function maxSumKele(arr: number[], k: number) {
  let res = 0;

  for (let i = 0; i < k; i++) {
    res = res + arr[i];
  }
  for (let i = k; i < arr.length; i++) {
    let sum = res + arr[i] - arr[i - k];
    res = Math.max(res, sum);
  }

  console.log(res);
}

maxSumKele([1, 8, 30, -5, 20, 7], 4);
