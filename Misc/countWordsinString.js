// count words in a string
// ex) 'hello, today is labor day' => 5

function countWords(str){
  words = str.split(' ');
  return words.length;
}

console.log(countWords('hello, today is labor day'));
console.log(countWords('study study study, today i study'));
console.log(countWords("i cannot wait to eat some el farolito"));
