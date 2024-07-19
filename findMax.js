let array = [5, 8, 9];

function findMax() {
  let maior = 0;
  for (var i = 0; i < array.length; i++) {
    if (maior < array[i]) {
      maior = array[i];
    }
  }
  console.log(maior);
}

findMax();
