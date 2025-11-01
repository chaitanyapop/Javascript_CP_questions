function majorityElement(arr: number[]): number {
  let obj: any = {};
  let maxAppearedElement = arr[0];
  let maxCal = Math.round(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
      if (
        maxAppearedElement != arr[i] &&
        obj[maxAppearedElement] < obj[arr[i]]
      ) {
        maxAppearedElement = arr[i];
      }
    }
  }
  return obj[maxAppearedElement] >= maxCal ? maxAppearedElement : 0;
}

console.log(majorityElement([3, 2, 3]));
