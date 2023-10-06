function repeated_ele(arr, n)
{
    var obj1= new Object();
    var count=0;
    for(var i=0;i<n;i++)
    {
        if(obj1[arr[i]]==undefined)
        {
            obj1[arr[i]]=1
            count++;
        }
        else
        {
            obj1[arr[i]]++
            count--
        }
    }
    return count
}
console.log(repeated_ele([10,20,30,40,10], 5))