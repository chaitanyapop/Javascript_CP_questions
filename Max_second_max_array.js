function max_second_max(sizeOfArray, arr)
{
    let first_max=-1;
    let second_max=-1;
    let ptr1=0;
    let ptr2=1;
    for(var i=0;i<arr.length;i++)
    {
        
        if(arr[i]>first_max)
        {
           
            first_max=arr[i]
            second_max=first_max
            if(second_max==first_max)
            {
                
                second_max=-1
            }
            
        }
        else if(arr[i]>second_max)
        {
            second_max=arr[i]
            if(second_max==first_max)
            {
                
                second_max=-1
            }
        }
       
    }
    return [first_max, second_max]
}
console.log(max_second_max(6,[1000,1000,1000,1000,1000,100]))
