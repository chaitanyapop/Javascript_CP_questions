const input1={a:1, b:2, c:3, d:10, e:12}
const input2= {a:2, e:12, f:6, d:10}
let output={}

Object.keys(input1).forEach((data)=>{
    
    if(input1[data]==input2[data])
    {
        output[data]=input1[data]
    }
})
console.log(output)