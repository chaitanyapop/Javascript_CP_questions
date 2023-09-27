function insertIndex(arr, sizeofArray, index, element)
{
    /*var temp;
    if(index<sizeofArray)
    {
        temp=arr[index];
        arr[index]=element;
        for (i=index+1;i<sizeofArray;i++)
        {
            element=arr[i];
            arr[i]=temp;
            temp=element;
        }
    }
    else
    {
        arr[sizeofArray-1]= -1;
    }
    console.log(arr)*/
    arr.splice(index,0,element); 
    console.log(arr)
}
/* Both the codes are working properly but somehow the above one has given given time complexity error though it is the same one*/
insertIndex([7,7,1,1], 5, 3, 3)