/**
 *  Homework 02 - Helper Method Recursion
 *
 *  Solve the following problems using helper method recursion.
 */

'use strict';


/**
 * 1a. What is the term when the recursive call invokes itself more than once.
 * multiple recursion
 */


/**
 * 1b. List the steps involved to build a Helper Method Recursion algorithm.
 * 1) Instantiate variables (state & results)
 * 2) Return results
 * 3) Helper method (instantiate & invoke)
 * 4) Base case
 * 5) Recursive case
 */


/**
 * 1c. Should the recursive case or base case typically be tackled first?
 * base case - to prevent accidental stack overflow
 */


/**
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
 function printArray(arr){
   // YOUR WORK HERE
   let currIndex = 0;
   if(arr.length === 0){
     return;
   }
   function traverse(num){
     if(num > arr.length - 1){
       return;
     }
     console.log(arr[num]);
     traverse(num + 1);
   }
   return traverse(currIndex);
 }



/**
 * 2b. Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */
 function printReverse(arr) {
   let backwardIndex = arr.length - 1;

   if(arr.length === 0){
     return;
   }

   function traverse(num){
     if(num < 0){
       return;
     }
     console.log(arr[num]);
     traverse(num - 1)
   }
   return traverse(backwardIndex);
 }




/**
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
 function reverseString(str){
   let reversed = "";
   let letterCount = str.length;

   function traverse(num){
    if(num < 0) {
       return;
    }
    reversed += str.charAt(num);
    traverse(num - 1);
    }
    traverse(letterCount);
   return reversed
 }


/**
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
 function arrayPairs(arr) {
  let result = [];
   function traverse(num){
     if(num >= arr.length){
       return;
     }
     result.push([arr[num],arr[num + 1]]);
     traverse(num + 2)
   }
   traverse(0)
   return result;
}


/**
 * 2e. Flatten a nested array
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */
 // had trouble with this one...needed to research answer online
 function flatten(arr){
  let result = [];

  function traverse(subarr){
    for(var i = 0; i < subarr.length; i++){
      if(Array.isArray(subarr[i])){
        traverse(subarr[i])
      }
      else{
        result.push(subarr[i])
      }
    }
  }
   traverse(arr);
   return result;
 }
/**
 * 2f. Given a base and an exponent, create a function to find the power
 *
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */

 function power(base, exponent) {
   let result = 1;
   function traverse(num){
     if(num > exponent){
       return;
     }
     result *= base;
     traverse(num + 1);
   }
  traverse(1);
  return result;
 }


/**
 * 2g. Merge two sorted arrays
 *
 * Input:   arr1 {Array}
 * Input:   arr2 {Array}
 * Output:  Array
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */
 function merge(arr1, arr2){
   // YOUR WORK HERE

 }

 /**
  *  Target Practice 02 - Helper Method Recursion
  *
  *  Problem:  Powerset
  *
  *  Prompt:   Given a set S, return the powerset P(S), which is
  *            a set of all subsets of S.
  *
  *  Input:    A String
  *  Output:   An Array of Strings representing the power set of the input
  *
  *  Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']
  *
  *  Note:     The input string will not contain duplicate characters
  *            The letters in the subset string must be in the same order
  *            as the original input.
  */

 'use strict';


 // notes
 /**
 "" -> [""]
 "a" -> ["", a]
 "ab" -> ["",a,b,ab]
 "abc" - > ["",a,b,ab,ac,bc,abc]
 */

 // ""
 // ""   a
 // '' b  a   ab
 // '' c b bc a ac ab abc

 // function powerset(str) {
 //
 // }
 //
 //
 // # Week 2, Day 1: Helper Method Recursion
 //
 // ## Combinations
 //
 // Given two integers `n` and `k`, return **all possible combinations** of `k` numbers from `1` to `n`.
 //
 // ### Examples:
 //
 // ```
 // n = 4
 // k = 2
 //
 // result =
 // [
 // 	[1,2],
 // 	[1,3],
 // 	[1,4],
 // 	[2,3],
 // 	[2,4],
 // 	[3,4],
 // ]
 //
 // n = 3
 // k = 1
 //
 // result =
 // [
 // 	[1],
 // 	[2],
 // 	[3],
 // ]
 //
 // ```
 //
 //
 // #### Input:
 // `n` = `Integer`
 //
 // `k` = `Integer`
 //
 // #### Output
 // `result` = `Array of Arrays of Integers`
 //
 //
 // #### Constraints:
 //
 // **Time**: `O(n choose k)`
 //
 // **Space**: `O(n choose k)`
 //
 // The order of the output array **DOES NOT MATTER**.
 //
 // `n` and `k` are both positive.
 //
 // #### Resources:
 //
 // [N Choose K](https://en.wikipedia.org/wiki/Binomial_coefficient)
 //
 // [Combinations] (https://betterexplained.com/articles/easy-permutations-and-combinations/)
 //
 // #### Hints:
 //
 // You can think of `1` to `n` as the **set of numbers** you can choose from.
 //
 // You can think of `k` as the **number of elements** in the result arrays that come from that set.
 //
 // You'll want to ignore relative order of the numbers, ie use `[1,2]` and ignore `[2,1]`.
 //
 // Think about how you might use multiple recursion here.
 //
 // This problem will have two recursive cases and two base cases.










////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


let testCount;

console.log('printArray tests');
testCount = [0, 0];

assert(testCount, 'able to print the elements of [1, 2, 3] forwards', () => {
  let record = captureLog(printArray, [1, 2, 3]);
  return record.length === 3 && record[0] === 1 &&
         record[1] === 2 && record[2] === 3;
});

assert(testCount, 'does not print for an empty array', () => {
  let record = captureLog(printArray, []);
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', () => {
  let record = captureLog(printArray, [5]);
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printReverse tests');
testCount = [0, 0];

assert(testCount, 'able to print the elements of [1, 2, 3] backwards', () => {
  let record = captureLog(printReverse, [1, 2, 3]);
  return record.length === 3 && record[0] === 3 &&
         record[1] === 2 && record[2] === 1;
});

assert(testCount, 'does not print for an empty array', () => {
  let record = captureLog(printReverse, []);
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', () => {
  let record = captureLog(printReverse, [5]);
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('reverseString tests');
testCount = [0, 0];

assert(testCount, 'able to reverse string \'hello\'', () => {
  let test = reverseString('hello');
  return test === 'olleh';
});

assert(testCount, 'able to return an empty string for empty string input', () => {
  let test = reverseString('');
  return test === '';
});

assert(testCount, 'able to return the same character for a single-character input string', () => {
  let test = reverseString('b');
  return test === 'b';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('arrayPairs tests');
testCount = [0, 0];

assert(testCount, 'should return [[1, 2],[3, 4],[5, 6]] output for [1, 2, 3, 4, 5, 6] input', () => {
  let test = arrayPairs([1, 2, 3, 4, 5, 6]);
  return test.length === 3 &&
    test[0][0] === 1 && test[0][1] === 2 &&
    test[1][0] === 3 && test[1][1] === 4 &&
    test[2][0] === 5 && test[2][1] === 6;
});

assert(testCount, 'should return [[1, 2],[3, 4],[5, undefined]] output for [1, 2, 3, 4, 5] input', () => {
  let test = arrayPairs([1, 2, 3, 4, 5]);
  return test.length === 3 &&
    test[0][0] === 1 && test[0][1] === 2 &&
    test[1][0] === 3 && test[1][1] === 4 &&
    test[2][0] === 5 && test[2][1] === undefined;
});

assert(testCount, 'should return [] output for [] input', () => {
  let test = arrayPairs([]);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('flatten tests');
testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 5, 6] output for [1, [2, 3, [4]], 5, [[6]]] input', () => {
  let test = flatten([1, [2, 3, [4]], 5, [[6]]]);
  return test.length === 6 &&
    test[0] === 1 && test[1] === 2 &&
    test[2] === 3 && test[3] === 4 &&
    test[4] === 5 && test[5] === 6;
});

assert(testCount, 'should return [] output for [] input', () => {
  let test = flatten([]);
  return test.length === 0;
});

assert(testCount, 'should return [1, 2, 3, 4, 5, 6] output for [1, [2, 3, [4], []], [], 5, [[], [6]]] input (note the empty arrays)', () => {
  let test = flatten([1, [2, 3, [4], []], [], 5, [[], [6]]]);
  return test.length === 6 &&
    test[0] === 1 && test[1] === 2 &&
    test[2] === 3 && test[3] === 4 &&
    test[4] === 5 && test[5] === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('power tests');
testCount = [0, 0];

assert(testCount, 'should return 81 for 3 to the 4th power', () => {
  let test = power(3, 4);
  return test === 81;
});

assert(testCount, 'should return 1 for 5 to the 0th power', () => {
  let test = power(5, 0);
  return test === 1;
});

assert(testCount, 'should return 1 for 1 to the 100th power', () => {
  let test = power(1, 100);
  return test === 1;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('merge tests');
testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 6, 7, 9] when merging [1, 4, 7]' +
  ' and [2, 3, 6, 9]', () => {
  let test = merge([1, 4, 7], [2, 3, 6, 9]);
  return test.length === 7 && test[0] === 1 &&
    test[1] === 2 && test[2] === 3 &&
    test[3] === 4 && test[4] === 6 &&
    test[5] === 7 && test[6] === 9;
});

assert(testCount, 'should handle inputs when left argument is empty array', () => {
  let test = merge([], [2, 3, 6, 9]);
  return test.length === 4 &&
    test[0] === 2 && test[1] === 3 &&
    test[2] === 6 && test[3] === 9;
});

assert(testCount, 'should handle inputs when right argument is empty array', () => {
  let test = merge([1, 4, 7], []);
  return test.length === 3 && test[0] === 1 &&
    test[1] === 4 && test[2] === 7;
});

assert(testCount, 'should handle two empty arrays as inputs', () => {
  let test = merge([], []);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
  let record = [];
  const log = console.log;
  console.log = (...args) => {
    record = record.concat(...args);
  };
  method(...params);
  console.log = log;
  return record;
}


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}




// target Practice
// console.log('Powerset Tests');
// var testCount = [0, 0];
//
// assert(testCount, 'should work on example input', function(){
//   var example = powerset('abc');
//   return arraysMatching(example, ['','a','b','c','ab','bc','ac','abc']);
// });
//
// assert(testCount, 'should work on empty input', function(){
//   var example = powerset('');
//   return arraysMatching(example, ['']);
// });
//
// assert(testCount, 'should work on two-letter input', function(){
//   var example = powerset('ab');
//   return arraysMatching(example, ['','a','b','ab']);
// });
//
// assert(testCount, 'should work on longer input', function(){
//   var example = powerset('abcdefg');
//   return arraysMatching(example, [ '','g','f','fg','e','eg','ef','efg','d',
//     'dg','df','dfg','de','deg','def','defg','c','cg','cf','cfg','ce','ceg',
//     'cef','cefg','cd','cdg','cdf','cdfg','cde','cdeg','cdef','cdefg','b','bg',
//     'bf','bfg','be','beg','bef','befg','bd','bdg','bdf','bdfg','bde','bdeg',
//     'bdef','bdefg','bc','bcg','bcf','bcfg','bce','bceg','bcef','bcefg','bcd',
//     'bcdg','bcdf','bcdfg','bcde','bcdeg','bcdef','bcdefg','a','ag','af','afg',
//     'ae','aeg','aef','aefg','ad','adg','adf','adfg','ade','adeg','adef',
//     'adefg','ac','acg','acf','acfg','ace','aceg','acef','acefg','acd','acdg',
//     'acdf','acdfg','acde','acdeg','acdef','acdefg','ab','abg','abf','abfg',
//     'abe','abeg','abef','abefg','abd','abdg','abdf','abdfg','abde','abdeg',
//     'abdef','abdefg','abc','abcg','abcf','abcfg','abce','abceg','abcef',
//     'abcefg','abcd','abcdg','abcdf','abcdfg','abcde','abcdeg','abcdef','abcdefg'
//   ]);
// });
//
// console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
//
//
// // function for checking if arrays contain same elements
// // (do not need to be in the same order)
// function arraysMatching(arr1, arr2) {
//   if (arr1.length !== arr2.length) { return false; }
//
//   let cache = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (cache[arr1[i]] === undefined) {
//       cache[arr1[i]] = 1;
//     } else {
//       cache[arr1[i]]++;
//     }
//   }
//
//   for (let j = 0; j < arr2.length; j++) {
//     if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) { return false; }
//     cache[arr2[j]]--;
//   }
//   return true;
// }
//
//
// // custom assert function to handle tests
// // input: count {Array} - keeps track out how many tests pass and how many total
// //        in the form of a two item array i.e., [0, 0]
// // input: name {String} - describes the test
// // input: test {Function} - performs a set of operations and returns a boolean
// //        indicating if test passed
// // output: {undefined}
// function assert(count, name, test) {
//   if (!count || !Array.isArray(count) || count.length !== 2) {
//     count = [0, '*'];
//   } else {
//     count[1]++;
//   }
//
//   let pass = 'false';
//   let errMsg = null;
//   try {
//     if (test()) {
//       pass = ' true';
//       count[0]++;
//     }
//   } catch(e) {
//     errMsg = e;
//   }
//   console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
//   if (errMsg !== null) {
//     console.log('       ' + errMsg + '\n');
//   }
// }
