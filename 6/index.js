function massivYigindisi(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let massiv = [1, 2, 3, 4, 5];
let yigindi = massivYigindisi(massiv);
console.log(yigindi);