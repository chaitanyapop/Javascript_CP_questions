function printIntersection(arr1, arr2, N, M)
{
    //your code here
   var result=[]
   var count_arr1=0;
   var count_arr2=0;
   var iterator=0;
   if(N<M)
   {
    iterator=M
   }
   else if(N>M)
   {
    iterator=N
   }
   else
   {
    iterator=N
   }
   console.log(iterator)
   for(var i=0;i<iterator;i++)
   {
       if(arr1[count_arr1]>arr2[count_arr2])
       {
           count_arr2++
       }
       else if(arr1[count_arr1]<arr2[count_arr2])
       {
           count_arr1++
       }
       else if(arr1[count_arr1]==arr2[count_arr2])
       {
           if(result[result.length-1]!=arr1[count_arr1])
           {
            result.push(arr1[count_arr1])
            count_arr1++
            count_arr2++
           }
           else
           {
            count_arr1++
            count_arr2++
           }
          
           
       }
   }
   return result.length==0 ? -1 :result
}
console.log(printIntersection([1,2,3,4,5,6,7,8,9,10], [50,69,79], 10, 3))