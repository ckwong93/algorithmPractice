// given a string, write a function that will reverse the letters in a word
// hello world -> olleh dlrow

function wordReverse(string){
    let words = string.split(' ');
    let letters;
    let result = [];
    for(let i = 0; i < words.length; i++){
        letters = "";
        for(let j = words[i].length - 1; j >= 0; j--){
            letters += words[i][j];
        }
        result.push(letters);
    }
    console.log(result)
    return result.join(' ');
}

console.log(wordReverse('hello world'));
console.log(wordReverse('this is a test'))