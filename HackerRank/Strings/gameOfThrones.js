// Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.

// door

// But, to lock the door he needs a key that is an anagram of a certain palindrome string.

// The king has a string composed of lowercase English letters.Help him figure out whether any anagram of the string can be a palindrome or not.

// Input Format

// A single line which contains the input string.

//     Constraints

// length of string
// Each character of the string is a lowercase English letter.
// Output Format

// A single line which contains YES or NO in uppercase.

// Sample Input 0

// aaabbbb
// Sample Output 0

// YES
// Explanation 0

// A palindrome permutation of the given string is bbaaabb.

// Sample Input 1

// cdefghmnopqrstuvw
// Sample Output 1

// NO
// Explanation 1

// You can verify that the given string has no palindrome permutation.

// Sample Input 2

// cdcdcdcdeeeef
// Sample Output 2

// YES
// Explanation 2

// A palindrome permutation of the given string is ddcceefeeccdd.


function gameOfThrones(s) {
    // Complete this function
    let letters = {};
    let oddCount = 0;
    for (var i = 0; i < s.length; i++) {
        if (letters[s[i]]) {
            letters[s[i]]++;
        }
        else {
            letters[s[i]] = 1;
        }
    }
    for (var items in letters) {
        if (letters[items] % 2 !== 0) {
            oddCount++;
        }
    }
    if (oddCount > 1) {
        return 'NO';
    }
    return 'YES'
}

console.log(gameOfThrones('aaabbbb'));
console.log(gameOfThrones('cdefghmnopqrstuvw'));
console.log(gameOfThrones('cdcdcdcdeeeef'))