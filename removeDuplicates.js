function removeDuplicates(arrFood) {
  const newArray = [];
  for (var i = 0; i < arrFood.length; i++) {
    let exist = false;
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[j] == arrFood[i]) {
        exist = true;
      }
    }

    if (!exist) {
      newArray.push(arrFood[i]);
    }
  }
 
  return newArray;
}

module.exports=removeDuplicates