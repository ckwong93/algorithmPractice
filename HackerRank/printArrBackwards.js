// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  (you may also see it written as ).
//
// Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers.
//
// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.
//
// Input Format
//
// The first line contains an integer,  (the number of integers in ).
// The second line contains  space-separated integers describing .
//
// Constraints
//
// Output Format
//
// Print all  integers in  in reverse order as a single line of space-separated integers.
//
// Sample Input
//
// 4
// 1 4 3 2
// Sample Output
//
// 2 3 4 1


// iteratively
function printBackwards(numbers){
  let reversed= [];

  for(var i = numbers.length - 1; i >= 0; i--){
    reversed.push(numbers[i])
  }
  return reversed
}

console.log(printBackwards([1,2,3,4,5]))

// recursively
function printBackwardRecursively(numbers){
  let reversed = [];
  let index = numbers.length - 1
  function traverse(array,position){
    if(position < 0){
      return
    }
    reversed.push(array[position]);
    traverse(numbers,position - 1)
  }
  traverse(numbers,index)
  return reversed;
}
console.log(printBackwardRecursively([1,2,3,4,5]))
