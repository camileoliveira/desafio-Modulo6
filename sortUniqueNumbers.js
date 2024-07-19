const removeDuplicates = require("./removeDuplicates.js")

function sortUniqueNumbers(arr){
let arrRemoveDuplicates = removeDuplicates(arr);
arrRemoveDuplicates.sort((a,b) => a - b )

return arrRemoveDuplicates
}

const arrResult = sortUniqueNumbers([12,2,11,9,13,12,10,10])

console.log(arrResult)

/* a arrow function de cima é basicamento isso - compara os valores dos dois numeros do array e ver qual é maior, um por um

function arrow(a,b){
    return a
}
*/