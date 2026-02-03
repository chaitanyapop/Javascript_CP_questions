function findLargest(arr: any) {
  let largest: any;
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length == 0) {
    return null;
  } else {
    arr.forEach((data: any, i: any) => {
      if (largest == undefined) {
        largest = data;
      } else {
        if (data > largest) {
          largest = data;
        }
      }
    });
  }
  return largest;
}
console.log(findLargest([-5, 2, -3, 4]));
