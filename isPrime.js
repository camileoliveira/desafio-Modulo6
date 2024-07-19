
let validation = 'true';
let notValidation = 'false';

function isPrime(num){
    if(num % 2 !== 0){
        return validation
    } else {
        return notValidation
    }
}

let mensage = isPrime(10);

console.log(mensage)