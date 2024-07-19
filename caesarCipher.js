function caesarCipher(string, num) {
  let letter = string.split("");

  let newString = "";
  for (var i = 0; i < string.length; i++) {
    let numeroAsci = letter[i].charCodeAt(); //Metodo que transforma as letras do nome na tabela asci
    numeroAsci += num;

    newString += String.fromCharCode(numeroAsci); // Método que transforma os numeros da tabela asci que fiz em cima em letra
    // newString passa por cada uma letra do nome que escolhi e junta (concatena) aquela letra mais a proxima, até chegar ao final da palavra
  }
  return newString;
}

// const resultCaesarCipher = caesarCipher("camile", 2);

// console.log(resultCaesarCipher);

module.exports = caesarCipher
