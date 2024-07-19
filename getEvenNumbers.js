function getEvenNumbers(arrayTotal) {
  arrayEven = [];

  for (var i = 0; i < arrayTotal.length; i++) {
    const number = arrayTotal[i];

    if (number % 2 == 0) {
      arrayEven.push(number);
    }
  }
  return arrayEven;
}



module.exports = getEvenNumbers
