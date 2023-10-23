function wave_array(n, arr)
{
    let indicator=false;
    let temp=0
    if(n==2)
    {
        temp=arr[1]
        arr[1]=arr[0]
        arr[0]=temp
    }
    else
    {
        for(let i=1; i<n-1;i++)
        {
            if(indicator==false)
            {
                if(arr[i-1]<arr[i])
                {
                    temp=arr[i]
                    arr[i]=arr[i-1]
                    arr[i-1]=temp
                }
                indicator=true
            }
            else
            {
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                indicator=false
            }
        }
    }
    return arr
}
console.log(wave_array(2, [4783,8745]))