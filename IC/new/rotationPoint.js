let words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

function findRotationPoint(letters) {
    let index;
    for (var i = 1; i < words.length; i++) {
        if (words[i] < words[i - 1]) {
            index = words[i];
        }
    }
    return index
}


function findRotationPoint(letters) {
    let left = 0;
    let right = letters.length - 1;


    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (letters[left] < letters[mid]) {
            left = mid;
        } else {
            right = mid
        }
        if (left + 1 === right) {
            break
        }
    }
    return right
}

findRotationPoint(words);

