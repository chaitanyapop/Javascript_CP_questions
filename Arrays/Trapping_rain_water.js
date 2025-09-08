"use strict";
//two pointer approach
function trappingRainWater(arr) {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = arr.length - 1;
    let water = 0;
    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            }
            else {
                water = water + leftMax - arr[left];
            }
            left++;
        }
        else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            }
            else {
                water = water + rightMax - arr[right];
            }
            right--;
        }
    }
    return water;
}
console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
