
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

// console.log(nthFibonacciTop(3));



// // Print each item in an array in order

function printInOrder(input){

  function printHelper(i){
   if(i > input.length - 1){
     return;
   }
    console.log(input[i]);
    printHelper(i+1);
  }

  printHelper(0);
}

// Time: O(n)
// Space: O(1)
console.log(printInOrder([1,2,3,4,5]));



// // Print each item in an array backwards
// // Time: O(n)
// // Space: O(n)

function printBackwards(input){
  let i = input.length;
  function printHelper(i){
    if(i < 0){
      return;
    }
    console.log(i);
    printHelper(i-1)
  };
  printHelper(i)
}

// console.log(printBackwards([1,2,3,4,5]));




// // Reverse a string
// // Time: O(n)
// // Space: O(n)

function stringReverser(string){
  let reversed = "";
  let i = string.length - 1;

  function reverseHelper(i){
    if(i < 0){
      return;
    }
    reversed += string.charAt(i);
    reverseHelper(i-1);
  };
  reverseHelper(i);
  return reversed;
}
// console.log(stringReverser("hello"));


// // Given an array of integers, create an array of two-item arrays
// Time: O(n)
// Space: O(n)
function twoItemArr(input){
  let result = [];

  function twoHelp(i){
    if(i > input.length - 1){
      return;
    }
    result.push([input[i],input[i+1]]);
    twoHelp(i+2);
  }
  twoHelp(0);
  return result;
}
console.log(twoItemArr([1,2,3,4,5,6]));
