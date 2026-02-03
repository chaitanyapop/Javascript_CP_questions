function findSmallest(arr: any) {
  let smallest: any;
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length == 0) {
    return null;
  } else {
    arr.forEach((data: any, i: any) => {
      if (smallest == undefined) {
        smallest = data;
      } else {
        if (data < smallest) {
          smallest = data;
        }
      }
    });
  }
  return smallest;
}
console.log(findSmallest([0, 2, 3]));
