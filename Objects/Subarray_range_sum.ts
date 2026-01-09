function subArraySumRange(arr: number[], tar: number) {
  let map = new Map();
  let preFixSum = 0;
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    preFixSum = preFixSum + arr[i];

    let checkValue = preFixSum - tar;
    if (map.get(checkValue)) {
      count = count + map.get(checkValue);
    }
    map.has(preFixSum)
      ? map.set(preFixSum, map.get(preFixSum) + 1)
      : map.set(preFixSum, 1);
  }

  return count;
}
console.log(subArraySumRange([1], 0));
