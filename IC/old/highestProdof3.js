/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

function highest(nums){

  if(nums.length < 3){
    return 'not enough numbers to test'
  }

  var hp3 = nums[0] * nums[1] * nums[2];
  // default answer for highest 3 prod
  var hp2 = nums[0] * nums[1];
  // default answer for highest 2 prod
  var lp2 = nums[0] * nums[1];
  // default answer for lowest 2 num
  var maximum = Math.max(nums[0], nums[1]);
  // default highest 1 num
  var minimum = Math.min(nums[0], nums[1]);
  // default lowest 1 num

  for(var i = 2; i < nums.length; i++){
    // go through each num, not including ones already defaulted (except item 3)
    // check each num to see if its product is highest, lowest, or one num high/low
    var current = nums[i];

    hp3 = Math.max(hp3, current * hp2, current * lp2);
    // checks highest prod3 vs current number * highest prod2 vs current * lowest prod2(for negatives)

    hp2 = Math.max(hp2, current * maximum, current * minimum);
    // checkest highest prod2 vs current * max 1num vs current * low1num(for negatives)

    lp2 = Math.min(lp2, current * maximum, current * minimum);
    // checkest minimum prod2 vs current * max 1num vs current * low1num(for negatives)

    maximum = Math.max(maximum, current);
    // saves current num as max if it is highest 1num

    minimum = Math.min(minimum, current);
    // saves lowest num as min if it is lowest 1num
  }
  return hp3
  // return highest prod3
}

var arrayOfInts = [1, 10, -5, 1, -100];
console.log(highest(arrayOfInts))
// expected output = 5000
// actual ouput = 5000
