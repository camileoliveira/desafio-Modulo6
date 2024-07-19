const arrayNames = ["Pedro", "Joana", "Davi"];

let index = 0;

function greeetUsers() {
  while (index < arrayNames.length) {
    console.log("Boas vindas, " + arrayNames[index]);
    index++
  }
}
greeetUsers();
