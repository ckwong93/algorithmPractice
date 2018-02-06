// Alice is taking a cryptography class and finding anagrams to be very useful.We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams.Can you help her find this number ?

//     Given two strings, and, that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams.Any characters can be deleted from either of the strings.

// This challenge is also available in the following translations:

// Chinese
// Russian
// Input Format

// The first line contains a single string, .
// The second line contains a single string, .

//     Constraints

// It is guaranteed that  and  consist of lowercase English letters.
// Output Format

// Print a single integer denoting the number of characters which must be deleted to make the two strings anagrams of each other.

// Sample Input

// cde
// abc
// Sample Output

// 4
// Explanation

// We delete the following characters from our two strings to turn them into anagrams of each other:

// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We had to delete characters to make both strings anagrams, so we print  on a new line

function makingAnagrams(s1, s2) {
    // Complete this function
    let s1Letters = {};
    let s2Letters = {};
    let removed = 0;

    for (var i = 0; i < s1.length; i++) {
        if (s1Letters[s1[i]]) {
            s1Letters[s1[i]]++;
        } else {
            s1Letters[s1[i]] = 1;
        }
    }
    for (var j = 0; j < s2.length; j++) {
        if (s2Letters[s2[j]]) {
            s2Letters[s2[j]]++;
        } else {
            s2Letters[s2[j]] = 1;
        }
    }

    //   console.log(s1Letters);
    //   console.log(s2Letters);

    for (var lettersA in s1Letters) {
        if (s1Letters[lettersA] && s2Letters[lettersA]) {
            removed += Math.abs(s1Letters[lettersA] - s2Letters[lettersA]);
            s1Letters[lettersA] = 0;
            s2Letters[lettersA] = 0
        }
        else if (s1Letters[lettersA] && !s2Letters[lettersA]) {
            removed += s1Letters[lettersA];
        }
    }

    for (var lettersB in s2Letters) {
        if (s1Letters[lettersB] && s2Letters[lettersB]) {
            removed += Math.abs(s1Letters[lettersB] - s2Letters[lettersB]);
        }
        else if (s2Letters[lettersB] && !s1Letters[lettersB]) {
            removed += s2Letters[lettersB];
        }
    }
    return removed;
}