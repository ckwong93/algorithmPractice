// // 9. Anagram Pair
// //
// // Given two strings, determine if the strings are anagrams of one another.
// //
// // Two words are anagrams of one another if they contain the same letters.
// //
// // Parameters
// // Input: str1 {String}
// // Input: str2 {String}
// // Output: {Boolean}
// //
// // Constraints
// // With N as the length of the first string, and M as the length of the second string.
// //
// // Time: O(N)
// // Space: O(N)
// //
// // Examples
// // "cat", "act" --> true
// // "cat", "dog" --> false
// // "racecar", "aaccrres" --> false
//
//
//
// function anagram(str1,str2){
//   var counter = {};
//   var firstWord = str1.split('');
//   var secondWord = str2.split('');
//
//   for(var i = 0; i < firstWord.length; i++){
//     if(counter[firstWord[i]]){
//       counter[firstWord[i]]++;
//     }
//     else{
//       counter[firstWord[i]] = 1;
//     }
//   }
//   for(var j = 0; j < secondWord.length; j++){
//     if(counter[secondWord[j]]){
//       counter[secondWord[j]]++;
//     }
//     else{
//       counter[secondWord[j]] = 1;
//     }
//   }
//   // console.log(counter);
//   for(var letters in counter){
//     if(counter[letters] % 2 !== 0){
//       return false;
//     }
//   }
//   return true;
// }
//
//
// console.log(anagram('cat','tac'));
// console.log(anagram('cat','dog'));
// console.log(anagram('racecar','aaccrres'));
// console.log(anagram('aa','bb'));



// ## 9. Anagram Pair

// *Given two strings, determine if the strings are anagrams of one another.*

// Two words are anagrams of one another if they contain the same letters.

// **Parameters**
// Input: str1 {String}
// Input: str2 {String}
// Output: {Boolean}

// **Constraints**
// With N as the length of the first string, and M as the length of the second string.

// Time: O(N)
// Space: O(N)

// **Examples**
// `"cat", "act" --> true`
// `"cat", "dog" --> false`
// `"racecar", "aaccrres" --> false`


function anagramPair(str1,str2){
  let firstLetters = {};
  let secondLetters = {};

  for(var i = 0; i < str1.length; i++){
    if(firstLetters[str1.charAt(i)]){
      firstLetters[str1.charAt(i)]++
    }
    else{
      firstLetters[str1.charAt(i)] = 1
    }
  }
  for(var j = 0; j < str2.length; j++){
    if(secondLetters[str2.charAt(j)]){
      secondLetters[str2.charAt(j)]++
    }
    else{
      secondLetters[str2.charAt(j)] = 1
    }
  }

  for(var items in firstLetters){
    if(firstLetters[items] !== secondLetters[items]){
      return false
    }
  }
  return true
}

console.log(anagramPair('cat','tac'));
console.log(anagramPair('cat','dog'));
console.log(anagramPair('racecar','aaccrres'));
console.log(anagramPair('apple','pleap'));
