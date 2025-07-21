function leaderInArray(a: number[]): number[] {
  let currEle = a[a.length - 1];
  let position = a.length - 1;
  for (let i = a.length - 2; i >= 0; i--) {
    if (a[i] >= currEle) {
      position = position - 1;
      currEle = a[i];
      a[position] = currEle;
    }
  }
  a = a.slice(position, a.length);
  return a;
}

console.log(leaderInArray([61, 61, 17]));
