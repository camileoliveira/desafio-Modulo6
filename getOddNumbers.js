function getOddNumbers(arr) {
  arrayOdd = [];

  for (var i = 0; i < arr.length; i++){
    const number = arr[i];

    if(number % 2 != 0){
        arrayOdd.push(number);
    }
  }
  return arrayOdd
}

const arrayResult = getOddNumbers([1, 3, 4, 5, 6, 7, 8, 9]);

console.log(arrayResult)
