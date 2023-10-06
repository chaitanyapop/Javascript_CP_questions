function sumExists(arr, N, sum) {
    // code here
    var obj1={}
    var temp_sum=0;
    for(var i=0;i<N;i++)
    {
       if(obj1[arr[i]]==undefined)
       {
           obj1[arr[i]]=i
           temp_sum=sum-arr[i]
           console.log(temp_sum + " " + arr[i])
           if(obj1[temp_sum]!=undefined && temp_sum!=arr[i])
           {
               return 1
           }
       }
    }
    
    return 0
}
console.log(sumExists([25,78,9,14,88,2,51,61,29,94,85,6,41,12,5,36,57,73,51],19,24))