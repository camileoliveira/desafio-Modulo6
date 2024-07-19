const reverseString = require('./reverseString');

function reverseWordsInSentence(phrase){

let arrayString = phrase.split(" ")


let result = ''
for (var i = 0; i < arrayString.length; i++){
    result += ` ${reverseString(arrayString[i])}`
}
return result


}

const resultFinaly = reverseWordsInSentence("hello world")

console.log(resultFinaly)