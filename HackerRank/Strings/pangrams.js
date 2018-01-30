// Roy wanted to increase his typing speed for programming contests.So, his friend advised him to type the sentence "The quick brown fox jumps over the lazy dog" repeatedly, because it is a pangram. (Pangrams are sentences constructed by using every letter of the alphabet at least once.)

// After typing the sentence several times, Roy became bored with it.So he started to look for other pangrams.

// Given a sentence, tell Roy if it is a pangram or not.

// Input Format

// Input consists of a string.

//     Constraints
// Length of  can be at most   and it may contain spaces, lower case and upper case letters.Lower -case and upper -case instances of a letter are considered the same.

// Output Format

// Output a line containing pangram if  is a pangram, otherwise output not pangram.

// Sample Input

// Input #1

// We promptly judged antique ivory buckles for the next prize    
// Input #2

// We promptly judged antique ivory buckles for the prize    
// Sample Output

// Output #1

// pangram
// Output #2

// not pangram
// Explanation

// In the first test case, the answer is pangram because the sentence contains all the letters of the English alphabet.

function pangram(string) {
    let letters = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 };
    lowercased = string.toLowerCase();
    for (var i = 0; i < lowercased.length; i++) {
        if (lowercased[i] !== ' ') {
            letters[lowercased[i]]++;
        }
    }

    for (var items in letters) {
        if (letters[items] < 1) {
            return 'not pangram'
        }
    }
    return 'pangram'
}

console.log(pangram('We promptly judged antique ivory buckles for the next prize'));
console.log(pangram('We promptly judged antique ivory buckles for the prize'));

