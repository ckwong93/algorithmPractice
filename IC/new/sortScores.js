// You created a game that is more popular than Angry Birds.

// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest.So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough.You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{ n })O(nlgn) time.

function countsort(unsortedScores, hiScore) {
    let counter = [];
    let result = [];

    for (var i = 0; i <= hiScore; i++) {
        counter[i] = 0;
    }
    for (var j = 0; j < unsortedScores.length; j++) {
        counter[unsortedScores[j]]++
    }

    for (var y = hiScore; y >= 0; y--) {
        for (var z = 0; z < counter[y]; z++) {
            result.push(y)
        }
    }
    return result
}


countsort([37, 89, 41, 65, 91, 53], 100)