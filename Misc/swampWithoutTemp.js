// write an algorithm that can swap two numbers without the use of a temporary variable
// example: a = 7, b =5 ==========>  a = 5, b = 7

function swapper(a,b){
  console.log('a: ', a, ' b: ', b)
  a = a - b;
  b = b + a;
  a = b - a;
  console.log('a: ', a, ' b: ', b)
}

swapper(7,5)

// a = a - b
// a = 7 - 5, a = 2 (diff between a and b)
// b = b + a
// b = 5 + 2, b = 7 (original b + difference)
// a = b - a
// a = 7 - 2, a = 5 ( b - difference)
// FINAL: a = 7, b = 5

// English Explanation:
// by setting a = a - b, we set a as a temporary variable equal to the difference between the
// two numbers. now we add that difference to b and set that equal to B. so now we know
// B is equal to the second number. now in order to get the first number, we make a = b - a,
// which means we are subtracting the difference from the second number to get the first number
