function Check_array_sorted_rotated(arr, num)
{
    let min_ele_pos=0
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<arr[min_ele_pos])
        {
            min_ele_pos=i
        }
    }
    if(arr[0]>arr[num-1])
    {
        let before_min=true;
        let after_min=true;
        for(let i=1;i<min_ele_pos;i++)
        {
            if(arr[i]>arr[i-1] && before_min==true)
            {
                continue
            }
            else
            {
                before_min=false
                break;
            }

        }
        for(let i=min_ele_pos+1;i<num;i++)
        {
            if(arr[i]>arr[i-1] && after_min==true)
            {
                continue
            }
            else
            {
                
               after_min=false
                break;
            } 
        }
        if(after_min==true && before_min==true)
        {
            return true
        }
        else
        {
            return false
        }
    }
    else
    {
        
        return false
    }
}
console.log(Check_array_sorted_rotated([3,4,6,1,2,5],6))