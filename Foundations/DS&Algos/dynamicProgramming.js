// dynamic programming allows us to shave off time complexity by keeping data stored. as a result, we will not need to recalculate recurring items.
// there are two types of dynamic programming - memoization and tabulation. 

// memoization is often used with recursion - storing saved calls into a hashmap lets you retrieve them quickly and thus speed up the time complexity by a wide margin



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
