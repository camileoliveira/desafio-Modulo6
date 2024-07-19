const unique = require("./unique.js");
const getEvenNumbers = require("./getEvenNumbers.js");

function sumOfUniqueEvenNumbers(arr) {
  let arrayUnique = unique(arr);
  let arrUniqueEvenNumbers = getEvenNumbers(arrayUnique);

  let sum = 0;

  for (var i = 0; i < arrUniqueEvenNumbers.length; i++) {
    sum += arrUniqueEvenNumbers[i];
  }

  return sum
}

const arrayResult = sumOfUniqueEvenNumbers([11, 12, 13, 4, 5, 6, 7, 3, 3, 2, 2]);

console.log(arrayResult)
