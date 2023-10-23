let arr=[]
let temp=false
function pattern(n)
{
    if(n>=0)
    {
        console.log(n)
        pattern(n-5)
        return console.log(n)
    }
    console.log(n)
    return 
}
pattern(16)