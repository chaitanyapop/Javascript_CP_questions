function decreasingFreq(arr: any[]): number[] {
  let mapArray = new Map();
  for (let i = 0; i < arr.length; i++) {
    mapArray.set(arr[i], (mapArray.get(arr[i]) || 0) + 1);
  }
  arr = Array.from(mapArray.entries()).sort((a, b) => {
    if (b[1] == a[1]) return a[0] - b[0]; //if same frequency sort in ascending
    return b[1] - a[1];
  });
  let result: number[] = [];
  arr.forEach(([value, freq]) => {
    result.push(...Array(freq).fill(value));
  });
  return result;
}

console.log(decreasingFreq([5, 5, 4, 6, 4]));
