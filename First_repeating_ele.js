function firstrepeated(arr, n)
{
    var obj1={}
    var compare=-1;
    for(var i=0;i<arr.length;i++)
    {
        if(obj1[arr[i]]==undefined)
        {
            obj1[arr[i]]=i
        }
        else
        {
          if(compare==-1 || obj1[arr[i]]<compare)
          {
              compare=obj1[arr[i]]+1
          }
        }
    }
    return compare
}
console.log(firstrepeated([1,5,3,4,3,5,6],7))