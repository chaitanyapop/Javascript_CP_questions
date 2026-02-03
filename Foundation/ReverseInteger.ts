function reverseInt(value: number) {
  let result = 0;
  let inputValue = value < 0 ? -value : value;
  while (inputValue > 0) {
    let remainder = inputValue % 10;
    result = result * 10 + remainder;
    inputValue = Math.floor(inputValue / 10);
  }
  result = value < 0 ? -result : result;
  result = result >= -(2 ** 31) && result <= 2 ** 31 - 1 ? result : 0;
  return result;
}
console.log(reverseInt(1534236469));
