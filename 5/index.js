const numbers = [1, 2, 3, 4, 5, 6];
function sumEvenOddNumbers(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  numbers.forEach(num => {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  });

  return [evenSum, oddSum];
}
const result = sumEvenOddNumbers(numbers);
console.log(result); 