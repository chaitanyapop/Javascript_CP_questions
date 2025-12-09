function decreasingFreq(arr: any[]): number[] {
  let mapArray = new Map();
  for (let i = 0; i < arr.length; i++) {
    mapArray.set(arr[i], (mapArray.get(arr[i]) || 0) + 1);
  }
  arr = Array.from(mapArray.entries()).sort((a, b) => {
    if (b[1] == a[1]) return a[0] - b[0]; //if same frequency sort in ascending
    return b[1] - a[1];
  });
  let result: number[] = [];
  arr.forEach(([value, freq]) => {
    result.push(...Array(freq).fill(value));
  });
  return result;
}

console.log(decreasingFreq([5, 5, 4, 6, 4]));

/*concepts=
 result.push(...Array(freq).fill(value)); 
 
Array(3)  means ['','',''] create array of mentioned number
.fill(5) means fill the array with 5 so it will be [5,5,5]
result.push(...Array(freq).fill(value)) Array(freq).fill(value) will form a value and using spread operator we are spreading that array and pushing into the result

Sort concept ->
scenario 1 (ascending) -
[3,10] a=3 b=10
.sort((a,b) => a-b) always consider a,b from circular brackets which will reduce confusion
a-b < 0 a should come first and then b
a-b > 0 b should come first and then a
a-b = 3-10 = -7 i.e a should come first and then b 
therefore, final output becomes [3,10]

scenario 2 (descending) -
[3,10] a=10, b=3
.sort((a,b) => b-a) always consider a,b from circular brackets which will reduce confusion
b-a < 0 a should come first and then b
b-a > 0 b should come first and then a
b-a = 3-10 = -7 i.e a should come first and then b
therefore, final output becomes [10,3] 
*/
