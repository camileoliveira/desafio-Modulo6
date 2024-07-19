function unique(arr) {
  arrayUnique = [];

  for (var i = 0; i < arr.length; i++) {
    const number = arr[i];
    let exist = false

    for (var j = 0; j <= arrayUnique.length; j++) {
      if (arrayUnique[j] == number) {
        exist = true;
      }
    }
    if (!exist){
      arrayUnique.push(number)
    }
  }
  return arrayUnique;
}

module.exports=unique