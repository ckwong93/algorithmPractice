
// 1. instantiate vars
// 2. return vars
// 3. create helper method
// 4. base case
// 5. recursive call

// bottom up approach
function nthFibonacciBtm(number){
  let fibo = [0,1];

  function fiboHelp(i){
    if(i > number){
      return;
    }
    fibo[i] = fibo[i-1] + fibo[i-2];
    fiboHelp(i+1)
  }

  fiboHelp(2);
  return fibo;
}

// console.log(nthFibonacciBtm(10));


function nthFibonacciTop(number){
  let result;

  function fiboHelp(i){
    if(i < 2){
      return i;
    }
    return fiboHelp(i-1) + fiboHelp(i-2);
  }

  result = fiboHelp(number);
  return result;
}

console.log(nthFibonacciTop(3));
