// 6. Character Mode
//
// Given a string, find the most frequent occurring letter(s) in the string
//
// Parameters Input: str {String}
// Output: {String}
//
// Constraints If more than one letter is tied for the most frequent, return a string of all the letters in one string.
//
// Time: O(N)
// Space: O(N)
//
// Examples
// 'hello' --> 'l'
// 'A walk in the park' --> 'a'
// 'noon' --> 'no'
//
function characterMode(string){
  var letterCount = {};
  var letters = string.toLowerCase().split('');
  var modeNum = 0;
  var mode = "";
  // console.log(letters);
  for(var i = 0; i < letters.length; i++){
    if(letterCount[letters[i]] && letters[i] !== ' '){
      letterCount[letters[i]]++;
    }
    else{
      letterCount[letters[i]] = 1;
    }
  }
  // console.log(letterCount);
  for(var item in letterCount){
    if(letterCount[item] > modeNum){
      modeNum = letterCount[item];
    }
  }

  for(var item2 in letterCount){
    if(letterCount[item2] >= modeNum){
      mode += item2;
    }
  }
  return mode;
}

console.log(characterMode('hello'));
console.log(characterMode('A walk in the park'));
console.log(characterMode('noon'));
