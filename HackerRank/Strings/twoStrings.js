// Given two strings, and, determine if they share a common substring.

// Input Format

// The first line contains a single integer, , denoting the number of  pairs you must check.
// Each pair is defined over two lines:

// The first line contains string.
// The second line contains string.
//     Constraints

// and  consist of lowercase English letters only.
// Output Format

// For each  pair of strings, print YES on a new line if the two strings share a common substring; if no such common substring exists, print NO on a new line.

// Sample Input

// 2
// hello
// world
// hi
// world
// Sample Output

// YES
// NO
// Explanation

// We have  pairs to check:

// , .The substrings  and  are common to both  and, so we print YES on a new line.
// , .Because  and  have no common substrings, we print NO on a new line.

function twoStrings(s1, s2) {
    // Complete this function
    let s1Letters = {};
    let s2Letters = {};

    for (var i = 0; i < s1.length; i++) {
        if (s1Letters[s1[i]]) {
            s1Letters[s1[i]]++;
        }
        else {
            s1Letters[s1[i]] = 1;
        }
    }
    for (var j = 0; j < s1.length; j++) {
        if (s2Letters[s2[j]]) {
            s2Letters[s2[j]]++;
        }
        else {
            s2Letters[s2[j]] = 1;
        }
    }

    for (lettersA in s1Letters) {
        if (s2Letters[lettersA]) {
            return 'YES'
        }
    }

    for (lettersB in s2Letters) {
        if (s1Letters[lettersB]) {
            return 'YES'
        }
    }
    return 'NO'
}
console.log(twoStrings('hello','hola'));