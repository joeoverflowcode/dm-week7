//Write a function that recieves a chyper string: "2fcjjm"
// and returns the decoded string by the rules of a 
//Caesar Cypher: "hello"

let cypher = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let word = '2fcJjM'


const useCypher = (word) => {
    word = word.toLowerCase().split('')
    let newWord= ''

for(let i = 1; i < word.length; i++) {
    for(let j = 0; j < cypher.length; j++){
        if(word[i] === cypher[j]){
        newWord += (cypher[j + +word[0]])
        }
    }
}
    return newWord
}



console.log(useCypher('2fcJjM'))