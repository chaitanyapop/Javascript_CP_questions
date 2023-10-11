function max_sun_subarray(arr, N)
{
 let max_sum=arr[0]
 let res=arr[0]
 for(let i=1;i<arr.length;i++)
 {
    max_sum=Math.max(max_sum+arr[i], arr[i])
    res=Math.max(res, max_sum)
 }
 return res
}
console.log(max_sun_subarray([1,2,3,-2,5], 5))