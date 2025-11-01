def checkEqualArray(arr1, arr2):
    objArr1 = {}
    objArr2 = {}
    if len(arr1)!=len(arr2):
        return False
    else:
        for i in arr1:
            if objArr1.get(i) == None:
                objArr1[i] = 1
            else:
                objArr1[i] = objArr1[i]+1
    
        for i in arr2:
            if objArr2.get(i) == None:
                objArr2[i] = 1
            else:
                objArr2[i] = objArr2[i]+1
        for key in objArr1:
            if objArr1.get(key) != objArr2.get(key):
                return False
    return True

print(checkEqualArray([1,2,3,4,9],[1,2,3,4,6]))