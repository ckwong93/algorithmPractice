// Write a function fib() that a takes an integer n and returns the nth fibonacci
// fib(0); // => 0
// fib(1); // => 1
// fib(2); // => 1
// fib(3); // => 2
// fib(4); // => 3


// non recursive solution
function fibonacci(n){
  var fibo = [0,1];

  for(i = 0; i < n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
  }
  return fibo[n]
}


// recursive solution
function fibonacci(n){
  if(n < 2){
    return n
  }else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

IC solution...similar to first non-recursive solution with edge case (neg nums) accounted for

function fib(n) {

    // edge cases:
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    } else if (n === 0 || n === 1) {
        return n;
    }

    // we'll be building the fibonacci series from the bottom up
    // so we'll need to track the previous 2 numbers at each step
    var prevPrev = 0;  // 0th fibonacci
    var prev = 1;      // 1st fibonacci
    var current;       // Declare current

    for (var i = 1; i < n; i++) {

        // Iteration 1: current = 2nd fibonacci
        // Iteration 2: current = 3rd fibonacci
        // Iteration 3: current = 4th fibonacci
        // To get nth fibonacci ... do n-1 iterations.
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}
