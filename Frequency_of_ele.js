function frequency(arr, N, P)
{
    let temp=arr[0];
    let val=0;
    for(let i=1;i<=arr.length;i++)
    {
        while(arr[temp-1]>0 )
        {
            val=arr[temp-1]
            arr[temp-1]= -1
            temp=val
         
            
        }
        
        if(temp>0 && temp<arr.length){
            arr[temp-1]=arr[temp-1]-1
        }
        
        temp=arr[i]
        
    }
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            arr[i]=0
        }
        else
        {
            arr[i]= - arr[i]
        }
    }
    return arr

}
console.log(frequency([2,3,2,3,5], 5, 5))
// here P is length of an array