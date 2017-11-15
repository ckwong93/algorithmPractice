// 5. Letter Sort
//
// Given a string of letters, return the letters in sorted order.
//
// Parameters
// Input: str {String}
// Output: {String}
//
// Constraints
// Time: O(N)
// Space: O(1)
//
// Examples
// hello --> ehllo
// whiteboard --> abdehiortw
// one --> eno

function letterSort(string){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var alphabetArray = alphabet.split('');
  var letters = string.split('');
  var collection = {};
  var finished = "";

  for(var i = 0; i < alphabetArray.length; i++){
    collection[alphabetArray[i]] = 0;
  }

  // console.log(collection);
  for(var j = 0; j < letters.length; j++){
    collection[letters[j]]++;
  }

  for(var items in collection){
    if(collection[items] > 0){
      finished += items.repeat(collection[items]);
    }
  }
  return finished;
}

console.log(letterSort('hello'));
console.log(letterSort('whiteboard'));
console.log(letterSort('eno'));
