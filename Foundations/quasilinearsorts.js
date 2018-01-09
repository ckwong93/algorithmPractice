/**
 *  Homework 06 - Quasilinear Sorts
 *
 *  Problem 1: Quicksort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using quicksort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 *
 *
 *  Problem 2: Mergesort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using mergesort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

'use strict';


// Worse Time Complexity: O(N^2)
// Worse Auxiliary Space Complexity: O(logn)
// Average Time Complexity: O(nlogn)
// Average Auxiliary Space Complexity: O(logn)
function quicksort(input) {
  let pivot = Math.floor(input.length/2);
  let left = [];
  let right = [];
  if(input.length <=1 ){ return input; }
  for(var i = 0; i < input.length; i++){
    if(i !== pivot){
      if(input[i] < input[pivot]){
        left.push(input[i])
      }
      else {
        right.push(input[i])
      }
    }
  }
  return quicksort(left).concat(input[pivot]).concat(quicksort(right));
}

// Worse Time Complexity: O(nlogn)
// Worse Auxiliary Space Complexity: O(n)
// Average Time Complexity: O(nlogn)
// Average Auxiliary Space Complexity: O(n)
function mergesort(input) {
  if(input.length < 2){
    return input;
  }
  let mid = Math.floor(input.length/2);
  let left = input.slice(0,mid);
  let right = input.slice(mid);

  return mergeHelper(mergesort(left),mergesort(right));
}

function mergeHelper(left,right){
  let iL = 0;
  let iR = 0;
  let totalLength = left.length + right.length;
  let results = [];

  while(iL + iR < totalLength){
    if(left[iL] <= right[iR] || (left[iL] && !right[iR])){
      results.push(left[iL]);
      iL++;
    }
    else if(right[iR] < left[iL] || (right[iR] && !left[iL])){
      results.push(right[iR]);
      iR++;
    }
  }
  return results;
}


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


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


// check if an array is sorted in linear time
function isSorted(arr) {
  if (arr.length < 2){ return true; }
  for (let i = 1; i < arr.length; i++){
    if (arr[i-1] > arr[i]) { return false; }
  }
  return true;
}


// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}

console.log('Quicksort Tests');
let testCount = [0, 0];

assert(testCount, 'should sort example input', () => {
  let example = quicksort([3,9,1,4,7]);
  return arraysEqual(example, [1,3,4,7,9]);
});

assert(testCount, 'should return empty array for empty input', () => {
  let example = quicksort([]);
  return arraysEqual(example, []);
});

assert(testCount, 'should sort single-element input', () => {
  let example = quicksort([10]);
  return arraysEqual(example, [10]);
});

assert(testCount, 'should sort moderate-sized input', () => {
  let work = [];
  for (let i = 0; i < 1000; i++){
    work.push(Math.floor(Math.random() * 1000));
  }
  let example = quicksort(work);
  return example.length === 1000 && isSorted(example);
});

assert(testCount, 'should sort large input', () => {
  let work = [];
  for (let i = 0; i < 1000000; i++){
    work.push(Math.floor(Math.random() * 1000000));
  }
  let example = quicksort(work);
  return example.length === 1000000 && isSorted(example);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Mergesort Tests');
testCount = [0, 0];

assert(testCount, 'should sort example input', () => {
  let example = mergesort([3,9,1,4,7]);
  return arraysEqual(example, [1,3,4,7,9]);
});

assert(testCount, 'should return empty array for empty input', () => {
  let example = mergesort([]);
  return arraysEqual(example, []);
});

assert(testCount, 'should sort single-element input', () => {
  let example = mergesort([10]);
  return arraysEqual(example, [10]);
});

assert(testCount, 'should sort moderate-sized input', () => {
  let work = [];
  for (let i = 0; i < 1000; i++){
    work.push(Math.floor(Math.random() * 1000));
  }
  let example = mergesort(work);
  return example.length === 1000 && isSorted(example);
});

assert(testCount, 'should sort large input', () => {
  let work = [];
  for (let i = 0; i < 1000000; i++){
    work.push(Math.floor(Math.random() * 1000000));
  }
  let example = mergesort(work);
  return example.length === 1000000 && isSorted(example);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
