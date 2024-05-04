let word = prompt("Enter word:  ");

function splitWord(word){
    let bush = ""
    for (let i = 0; i < word.length; i++) {
        bush += word[i] 
        document.write(bush + " ");
    }
    return bush;
    
}
let result = splitWord(word);