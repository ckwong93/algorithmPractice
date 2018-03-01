// Write a function fib() that a takes an integer n and returns the nth fibonacci 
// solve recursively
function fibonacci(n) {
    let nums = [0, 1];
    if (n <= 1) {
        return nums[n]
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

fibonacci(8)