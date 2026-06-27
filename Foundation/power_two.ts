function isPowerOfTwo(n: number): boolean {
  let value = Math.log2(n);
  return Number.isInteger(value);
}
