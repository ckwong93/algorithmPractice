// dynamic programming allows us to shave off time complexity by keeping data stored. as a result, we will not need to recalculate recurring items.
// there are two types of dynamic programming - memoization and tabulation. 

// memoization is often used with recursion - storing saved calls into a hashmap lets you retrieve them quickly and thus speed up the time complexity by a wide margin

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
// fibonacci(10) -> 55
// console.log(fibonacci(5));
// console.log(fibonacci(10));

// DP solution using memoization
function fibonacci(n){
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

console.log(fibonacci(5));
console.log(fibonacci(10));
