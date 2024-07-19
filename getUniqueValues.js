

function getUniqueValues(arrayOriginal) {
  let newArray = [];
  for (var i = 0; i < arrayOriginal.length; i++) {

    if (!newArray.includes(arrayOriginal[i])) {
      newArray.push(arrayOriginal[i]);
    }
  }

 return newArray;
}

const arrayResult = getUniqueValues([2, 4, 5, 2, 3, 6, 4, 1, 1]); // o array com os numeros originais precisava ser passado como parametro, por isso veio aqui

console.log(arrayResult)
