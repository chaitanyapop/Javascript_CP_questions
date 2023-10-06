    function check_union(a,n,b,m)
    {
        var count=0;
        var obj1={}
        if(n>m)
        {
          count=n
          for(var i=0;i<a.length;i++)
          {
            if(obj1[a[i]]==undefined)
            {
                obj1[a[i]]=1
            }
            else if(obj1[a[i]]==1)
            {
                count--
            }
          }
          for(var j=0;j<b.length;j++)
          {
              
              if(obj1[b[j]]==undefined)
              {
                 
                  count++
              }
          }
          return count
          
        }
        else
        {
            count=m
            for(var i=0;i<b.length;i++)
            {
              if(obj1[b[i]]==undefined)
                {
                    obj1[b[i]]=1
                }
                else if(obj1[b[i]]==1)
                {
                    count--
                }
            }
            for(var j=0;j<a.length;j++)
            {
                if(obj1[a[j]]==undefined)
                {
                    count++
                }
            }
            return count
        }
    }
        
console.log(check_union([1,2,3,4,5],5,[1,2,3,3,3,3,3,3],8))