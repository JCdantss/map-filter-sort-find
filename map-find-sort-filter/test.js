const array1 = [7, 3, 4, 5, 6];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
)

console.log(sumWithInitial);

const array2 = [7, 3, 4, 5, 6]

const result = 0
const soma = array2.reduce(
    (num1, num2) => num1 + num2, 
 result
)

console.log(soma)