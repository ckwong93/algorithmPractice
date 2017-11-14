// Example 1 : Sort a Bit Array
//
// Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).
//
// See if you can solve this in O(N) time and O(1) auxiliary space.


//
// function bitSorter(numbers){
//   var left = 0;
//   var right = numbers.length - 1;
//
//   while(left < right){
//     while(numbers[left] === 0){
//       left++;
//     }
//     while(numbers[right] === 1){
//       right--;
//     }
//     if(left < right){
//       [numbers[left],numbers[right]] = [numbers[right], numbers[left]];
//     }
//   }
//   return numbers;
// }
//
//
// console.log(bitSorter([1,0,1,0,1,0,0,0]));


// alternative solution using multiple pointers
function bitSorter(numbers){
  var mid = 0;
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] === 0){
      [numbers[i],numbers[mid]] = [numbers[mid],numbers[i]];
      mid++;
    }
  }
  return numbers;
}

console.log(bitSorter([1,0,1,0,1,0,0,0]));
