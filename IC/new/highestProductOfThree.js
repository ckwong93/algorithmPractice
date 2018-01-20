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
