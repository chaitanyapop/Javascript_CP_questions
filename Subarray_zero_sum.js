function subarray_zero_sum(arr,n)
{
    var prefix_sum=0;
    var obj1={}
    for(var i=0;i<arr.length;i++)
    {
        prefix_sum=prefix_sum+arr[i]
        if(prefix_sum==0)
        {
            return true;
        }
        else if(obj1[prefix_sum]==undefined)
        {
            obj1[prefix_sum]=1;
        }
        else
        {
            return true
        }
    }
    return false
}
console.log(subarray_zero_sum([-2,3,-1,4,-2,11],6))