// Your quirky boss collects rare, old coins...

// They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount = 4(4¢) and denominations = [1, 2, 3](1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// ways to make based on coin denomination
//   0 1 2 3 4
// 0|1 0 0 0 0
// 1|1 1 1 1 1
// 2|1 1 2 2 3
// 3|1 1 2 3 4


function makeChange(amount, denominations){
    let ways = [];
    // set up array of ways - this will show how to make the amount using a coin of amount ZERO
    for(var i = 0; i <= amount; i++){
        ways[i] = 0;
    }
    ways[0] = 1;
    // gives us ways to make cents from 0 to 4 using 0 cent coin. ways to make 0cents with a 0 cent equals 1
    // console.log(ways);
    
    // iterate through each coin. find diff between amount and coin and then add it to the ways array so we know how we can make the coin amount using the denominations
    denominations.forEach(function (coin) {
        for (var j = coin; j <= amount; j++) {
            let remainder = j - coin;
            ways[j] += ways[remainder];
        }
    })
    return ways[amount]
}

console.log(makeChange(4,[1,2,3]));