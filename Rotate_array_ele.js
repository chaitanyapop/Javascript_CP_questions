// function rotate_array(arr, d)
// {
//     let temp=0;
//     let val=0
//     if(d===0)
//     {
//         return arr
//     }
//     else{
//         for(let i=0;i<arr.length-d;i++)
//         {
//             temp=arr[i+d]
//             arr[i+d]=arr[i]
//             arr[i]=temp
//         }
//         temp=arr[arr.length-d]
//         //console.log(arr)
//         for(let i=arr.length-d;i<arr.length-1;i++ )
//         {
//             val=arr[i+1]
//             arr[i+1]=temp
//             temp=val
            

//         }
//         //console.log(arr)
//         arr[arr.length-d]=temp
//     }
//     return arr
// }



//GFG Solution
function rotate_left(arr, n,d)
{
    reverse(arr, 0,d-1)
    reverse(arr,d,n-1)
    reverse(arr,0,n-1)
    return arr
}
function reverse(arr,low, high)
{
    while(low<high)
    {
        temp=arr[low]
        arr[low]=arr[high]
        arr[high]=temp
        low++
        high--
    }
}
console.log(rotate_left([10,5,30,15 ],4,3))
/*My solution is also giving correct answer but in large case it is making mistake */