function secondHighest(s: string): number {
  let secondLargest = -1;
  let largest = -1;
  let data = s.split("");
  data.forEach((data, i) => {
    if (Number.isNaN(Number(data)) == false) {
      let value = Number(data);
      if (value > largest) {
        secondLargest = largest;
        largest = value;
      } else if (value > secondLargest && value < largest) {
        secondLargest = value;
      }
    }
  });
  return secondLargest;
}
console.log(secondHighest("dfa12321afd"));
