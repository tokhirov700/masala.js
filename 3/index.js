function getNumberFromString(inputString) {
  const digitMapping = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const lowercaseInput = inputString.toLowerCase();
  return digitMapping[lowercaseInput] || NaN;
}
console.log(getNumberFromString("zero")); 
console.log(getNumberFromString("one")); 
console.log(getNumberFromString("two")); 
console.log(getNumberFromString("three")); 
console.log(getNumberFromString("four")); 
console.log(getNumberFromString("five")); 
console.log(getNumberFromString("six")); 
console.log(getNumberFromString("seven")); 
console.log(getNumberFromString("eight")); 
console.log(getNumberFromString("nine")); 
console.log(getNumberFromString("eleven")); 