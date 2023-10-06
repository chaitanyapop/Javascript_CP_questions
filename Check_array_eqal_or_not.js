var A=[20,6,17,15,19]
var B=[6,17,20,19,19]
var N=5;
var flag= false;
console.log(check_array_equal_or_not(A,B,N))

function check_array_equal_or_not(A,B,N)
{
    var obj1={}
    
    for(var i=0;i<N;i++)
    {
        if(obj1[A[i]]==undefined)
        {
            
            obj1[A[i]]=1;
        }
        else
        {
            obj1[A[i]]++
        }
    }
    for(var j=0;j<N;j++)
    {
        if(obj1[B[j]]>0)
        {
            obj1[B[j]]--
           flag=true
        }
        else
        {
            flag=false;
            return flag
        }
    }
    return flag
}
