const caesarCipher = require("./caesarCipher.js");

function encryptSentenceWithCaesarCipher(phrase) {
  let phraseSeparada = phrase.split(" ");

  let result = ''

  for (var i = 0; i < phraseSeparada.length; i++) {
    result += caesarCipher(phraseSeparada[i], 2);
    result += ' ' // Para poder colocar novamente o espaço entra as palavras
  }

  return result
}

let phraseCaesarCipher = encryptSentenceWithCaesarCipher("Eu como pao");

console.log(phraseCaesarCipher);
