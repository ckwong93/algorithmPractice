// 2. Word Count
//
// Given an body of text, return a hash table of the frequency of each word.
//
// Parameters Input: text {String}
// Output: {Hash Table}
//
// Constraints If N is the number of characters in the string.
//
// Capital and lower case versions of the same word should be counted is the same word.
//
// Remove punctuations from all words.
//
// Time: O(N) Space: O(N)
//
// Examples
// 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'
// 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'
// 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'




function wordCount(string){
  var wordCollection = {};
  var words = string.toLowerCase().split(' ');

  for(var i = 0; i < words.length; i++){
    if(wordCollection[words[i]]){
      wordCollection[words[i]]++;
    }else{
      wordCollection[words[i]] = 1;
    }
  }
  return wordCollection;
}


console.log(wordCount('The cat and the hat'));
console.log(wordCount('As soon as possible'));
console.log(wordCount("It's a man, it's a plane, it's superman!"));
