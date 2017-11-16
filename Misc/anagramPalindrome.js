// 10. Anagram Palindrome
//
// Given a string, determine if the string can be rearranged to form a palindrome.
//
// A palindrome is a word that is the same as its reversed. For example: "racecar" and "noon" are palindromes because they match their reversed version respectively. On the other hand, "cat" is not a palindrome because "cat" does not equal "tac".
//
// Parameters
// Input: str {String}
// Output: {Boolean}
//
// Constraints
//
// Assume the string only contains lowercase letters and no spaces.
//
// Time: O(N)
// Space: O(1)
//
// Examples
// "carrace" --> true ("carrace" can be rearranged to "racecar")
// "cat" --> false



function anagramPalindrome(word){
  var letters = word.split('');
  var counter = new Set();

  for(var i = 0; i < letters.length; i++){
    if(counter.has(letters[i])){
      counter.delete(letters[i]);
    }
    else{
      counter.add(letters[i]);
    }
  }
  return counter.size <= 1;
}

console.log(anagramPalindrome('carrace'));
console.log(anagramPalindrome('cat'));
console.log(anagramPalindrome('civic'));
console.log(anagramPalindrome('civico'));
