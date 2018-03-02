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

console.log(fibonacci(8))


// solve iteratively
function fibonacciIterative(n) {
    let nums = [0, 1];
    for (var i = 2; i <= n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2]
    }
    console.log(nums)
    return nums[n]
}

console.log(fibonacciIterative(8));
console.log(fibonacciIterative(15));
