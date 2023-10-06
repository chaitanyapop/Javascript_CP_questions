function hashing_pair_1(arr, N, sum)
{
    var obj1=new Object()
    var sum_difference=0;
    for(var i=0;i<N;i++)
    {
        sum_difference= sum- arr[i]
        
        if(obj1[sum_difference]==arr[i])
        {
            return 1
        }
        else
        {
            obj1[arr[i]]=sum_difference
        }
       
    }
    return 0
}
console.log(hashing_pair_1([5,5], 2, 10))
/*function getKeyByValue(object, value) {
    console.log(Object.keys(object))
	return Object.keys(object).find((key)=>{
        console.log(object[key])
    })
}

const exampleObject = {
	key1: 'Geeks',
	key2: 100,
	key3: 'Javascript'
};

ans = getKeyByValue(exampleObject, 'Geeks');
console.log(ans)*/