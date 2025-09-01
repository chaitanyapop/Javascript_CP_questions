function Frequency_in_sortedArray(nums: number[]) {
  let currentEle = nums[0];
  let freq = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != currentEle) {
      console.log("frequency of ", currentEle, "is ", freq);
      currentEle = nums[i];
      freq = 1;
    } else {
      freq++;
    }
  }
  console.log("frequency of ", currentEle, "is ", freq);
}

Frequency_in_sortedArray([10, 10, 10]);
