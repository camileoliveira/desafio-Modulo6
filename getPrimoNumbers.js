function getPrimoNumbers(arrayAll) {
  const arrayOdd = [];

  for (var i = 0; i <= arrayAll.length; i++) {
    const numero = arrayAll[i];
    var divisores = 0;

    for (var j = 1; j <= numero; j++) {
      if (numero % j == 0) {
        divisores++;
      }
    }

    if (divisores == 2) {
      arrayOdd.push(numero);
    }
  }
  return arrayOdd;
}

const arrayFinale = getPrimoNumbers([5,15,10]);

console.log(arrayFinale);
