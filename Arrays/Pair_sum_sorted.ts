//two pointer
function pairSum(arr: any, target: any) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else if (sum == target) {
      return true;
    }
  }
  return false;
}

console.log(pairSum([1, 2, 4, 6, 10], 9));
