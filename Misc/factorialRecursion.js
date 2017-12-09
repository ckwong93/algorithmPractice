// 1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all
// positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120



function factorial(num){
  let result = 1;

  if(num < 0){
    return "can't find factorial of negative numbers"
  }
  function factorialHelper(i){
    if(i < 1){ return; }
    result *= i;
    factorialHelper( i-1 );
  }
  factorialHelper(num);
  return result;
}

console.log(factorial(5));
console.log(factorial(-2));
