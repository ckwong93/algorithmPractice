/* 
 https://en.wikipedia.org/wiki/Pascal%27s_triangle
 
 0 => 1
 1 => 1  1
 2 => 1  2  1
 3 => 1  3  3  1
 4 => 1  4  6  4  1
 5 => 1  5 10 10  5  1 
*/

// if input is zero, return array of 1
// if input is one, return [1,1]

// iterate through each set of numbers
  // start at index 1 and end and the last index
    // current index = sum of itself + item before it
    // append 1 to the result array
