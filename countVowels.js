function countVowels (string){
let word = string.split("")



count = 0

for (var i = 0; i < word.length; i ++){
    if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'){
        count ++
    }
}
return count
}

const result = countVowels('osteopatia')
console.log(result)