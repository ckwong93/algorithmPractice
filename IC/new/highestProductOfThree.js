// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers

// [2,3,4,5] -> (60) => 3 * 4 * 5
// [-7,4,3,6,-5] -> (210) => -7 * -5 * 6

// Time: O(log(n) + n) -> O(n)
// Space: O(n)
function highestProdofThree(numbers){
  if(numbers.length < 3){
    return false;
  }
  else if (numbers.length === 3){
    return numbers[0] * numbers[1] * numbers[2]
  }

  let sorted = quickSort(numbers);
  let prodLow = sorted[0] * sorted[1];
  let prodHi = sorted[sorted.length - 3] * sorted[sorted.length - 2];

  return Math.max(prodLow * sorted[sorted.length - 1], prodHi * sorted[sorted.length - 1]);
}

function quickSort(numbers){
  let a = [];
  let b = [];
  let pivotIndex = Math.floor(numbers.length/2);

  if(numbers.length < 2){
    return numbers;
  }

  for(var i = 0; i < numbers.length; i++){
    if(i !== pivotIndex){
      if(numbers[i] < numbers[pivotIndex]){
        a.push(numbers[i]);
      }
      else{
        b.push(numbers[i]);
      }
    }
  }
  return quickSort(a).concat(numbers[pivotIndex]).concat(quickSort(b));
}

console.log(highestProdofThree([-7,4,3,6,-5]));
console.log(highestProdofThree([-10,-10,1,3,2]));


// IC SOLUTION
// Time: O(n);
// Space: O(1);
function IC_highestProdofThree(numbers){
  if(numbers.length < 3){
    return 'not enough inputs'
  }
  // save highest of first 2 inputs
  let highest = Math.max(numbers[0],numbers[1]);
  // save lowest of first 2 inputs
  let lowest =  Math.min(numbers[0],numbers[1]);
  // init calc of hp2 as first two inputs
  let hp2 = numbers[0] * numbers[1];
  // init calc of lp2 as first two inputs
  let lp2 = numbers[0] * numbers[1];
  // init calc of hp3 as first three inputs
  let hp3 = numbers[0] * numbers[1] * numbers[2];
  // current item in index
  let currentNumber;

  for(var i = 2; i < numbers.length; i++){
    let currentNumber = numbers[i];
    // calc hp3 first with current then move downwards with the other variables
    hp3 = Math.max(hp3, lp2 * currentNumber, hp2 * currentNumber);
    hp2 = Math.max(hp2, highest * currentNumber, lowest * currentNumber);
    lp2 = Math.min(lp2, highest * currentNumber, lowest * currentNumber);
    highest = Math.max(highest, currentNumber);
    lowest = Math.min(lowest, currentNumber)
  }
  return hp3
}


console.log(IC_highestProdofThree([-7,4,3,6,-5]));
console.log(IC_highestProdofThree([-10,-10,1,3,2]));
