"use strict";
function stockBuySell(nums) {
    let totalProfit = 0;
    let largestStockValue = nums[0];
    let stockBuyIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largestStockValue) {
            totalProfit = totalProfit + (nums[i] - largestStockValue);
            largestStockValue = nums[i];
        }
        else {
            stockBuyIndex = i;
            largestStockValue = nums[i];
        }
    }
    return totalProfit;
}
console.log(stockBuySell([1, 5, 3, 1, 2, 8]));
