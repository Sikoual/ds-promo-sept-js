function squareAndCombineDigits(number) {
  const arrayNumberToString = number.toString().split(''); // [3,2,1,2]
  const squaredDigits = arrayNumberToString.map(number => Math.pow(Number(number), 2)); // [9,4,1,4]
  return Number(squaredDigits.join('')); // 9414 mais en number
}

console.log(squareAndCombineDigits(9119));
// console.log(squareAndCombineDigits(2112));
// console.log(squareAndCombineDigits(0));