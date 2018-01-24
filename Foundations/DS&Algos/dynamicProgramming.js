// dynamic programming allows us to shave off time complexity by keeping data stored. as a result, we will not need to recalculate recurring items.
// there are two types of dynamic programming - memoization and tabulation. 

// memoization is often used with recursion - storing saved calls into a hashmap lets you retrieve them quickly and thus speed up the time complexity by a wide margin
// for tabulation, we often use an array or matrix to keep track of values, updating for next iterations. essentially, we are adding all applicable examples each iteration


// -------------MEMOIZATION-------------
// ex 1: Dynamic Programming (memoization) with the Fibonacci Sequence

// non-DP solution
function fibonacci(n){
    if(n < 2){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

// fibonacci(5) -> 5
// fibonacci(55) -> 139583862445
// console.log(fibonacci(5));
// console.log(fibonacci(55));

// DP solution using memoization
function fibonacciDP(n){
    let memo = {};
    function fib(n){
        if(memo[n]){
            return memo[n]
        }
        else if(n < 2){
            return n;
        }
        else{
            memo[n] = fib(n-1) + fib(n-2);
        }
        return memo[n]
    }
    return fib(n)
}

// fibonacci(5) -> 5
// fibonacci(55) -> 139583862445
// console.log(fibonacciDP(5));
// console.log(fibonacciDP(55));




// ex 2: Dynamic Programming (memoization) with Lattice Paths

// non-DP solution
function latticePaths(n){
    let count = 0;
    function traverse(x,y){
        if(x == n && y == n){
            count++;
            return;
        } else if(x > n || y > n){
            return;
        }
        traverse(x+1,y);
        traverse(x,y+1);
    }
    traverse(0,0);
    return count;
}
// latticePaths(2) -> 6
// latticePaths(5) -> 252
// console.log(latticePaths(2));
// console.log(latticePaths(5));

// DP solution using memoization
function latticePathsDP(n){
    let memo = {};
    function traverse(x,y){
        if(memo[x + ',' + 'y']){
            return memo[x + ',' + y];
        } else if(x === n || y === n){
            return 1;
        } else if(x > n || y > n){
            return 0;
        }
        memo[x + ',' + y] = traverse(x + 1,y) + traverse(x, y+1);
        return memo[x + ',' + y]
    }
    return traverse(0,0)
}

// latticePathsDP(2) -> 6
// latticePathsDP(5) -> 252
// console.log(latticePathsDP(2));
// console.log(latticePathsDP(5));













// -------------TABULATION-------------

// ex 1: Coin Change Problem using Tabulation
function coinChange(amount,denominations){
    let ways = [];
    for(var i = 0; i <= amount; i++){
        ways[i] = 0;
    }
    ways[0] = 1;

    denominations.forEach(function(coin){
        for(var j = coin; j <= amount; j++){
            let remainder = j - coin;
            ways[j] += ways[remainder];
        }
    })

    return ways[amount];
}

console.log(coinChange(10,[1,2,3]))

// Explanation: we are using tabulation to keep track of how many ways we can make a certain coin. for example, ways to make 10 cents will include ways to make 10 cents with 1cent increments as well as 2 cent increments

// everytime we calculate, the formula is:
// remainder = j - coin;
// ways[j] += ways[remainder]

// if j = 4, coin = 3
// remainder = 4 - 3 = 1;
// ways[4] += ways[1]
// goes from 3 -> 4 after calculation

// now j = 5, coin = 3
// remainder = 5 - 3 = 2;
// ways[5] += ways[2]
// goes from 3 -> 5 after calculation

// now j = 6, coin = 3
// remainder = 6 - 3 = 3
// ways[6] += ways[3];
// goes from 4 -> 6 after calculation

//   0 1 2 3 4 5 6 7 8 9 10
// 0 1 0 0 0 0 0 0 0 0 0 0 
// 1 1 1 1 1 1 1 1 1 1 1 1
// 2 1 1 2 2 3 3 4 4 5 5 6
// 3 1 1 2 3 4 5 6 8 10 11 14