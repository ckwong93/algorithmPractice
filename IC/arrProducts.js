/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
For example, given:
  [1, 7, 3, 4]
your function would return:
  [84, 12, 28, 21]
by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
Do not use division in your solution.
*/

function getProductsOfAllIntsExceptAtIndex(array){

var productsOfItemsExceptIndex = [];
var currentProduct = 1;
for(i = 0; i < array.length; i++){
  productsOfItemsExceptIndex[i] = currentProduct;
  currentProduct *= array[i];
}


var currentProduct = 1;
for(j = array.length - 1; j >= 0; j--){
  productsOfItemsExceptIndex[j] *= currentProduct;
  currentProduct *= array[j];
}

return productsOfItemsExceptIndex;
}


var nums = [2,3,4,5]
console.log(getProductsOfAllIntsExceptAtIndex(nums))
// expected output = [60,40,30,24]
// actual output = [60,40,30,24]







// Code With Explanation

function getProductsOfAllIntsExceptAtIndex(array){

var productsOfItemsExceptIndex = [];
// output array that keeps track of all items being multiplied

var currentProduct = 1;
// set default value of 1 for index[0] so that there are no erros

for(i = 0; i < array.length; i++){
  productsOfItemsExceptIndex[i] = currentProduct;
// product at each item of array is equal to products of number beforehand
  currentProduct *= array[i];
// this is strategically placed so that the NEXT item equals the products of numbers BEFORE it
}


var currentProduct = 1;
for(j = array.length - 1; j >= 0; j--){
  // start at end of array and move backwards to index[0]
  productsOfItemsExceptIndex[j] *= currentProduct;
  // same concept as before, but moving backwards to get products of items AFTER array
  // since we are multiplying them together we get the product of array - before and array - after
  currentProduct *= array[j];
}

return productsOfItemsExceptIndex;
// returns our final array
}


// var nums = [2,3,4,5]
// console.log(getProductsOfAllIntsExceptAtIndex(nums))
// expected output = [60,40,30,24]
// actual output = [60,40,30,24]


// alternative = divide product of all nums by value at index
function getProductsOfAllIntsExceptAtIndex(arr){
  var savedNumbers = arr;
  var morphed = [];
  var product = 1;

  for(var i = 0; i < arr.length; i++){
    product*=arr[i];
  }

  for(var j = 0; j < arr.length; j++){
    morphed.push(product/savedNumbers[j]);
  }

  return morphed;
}

getProductsOfAllIntsExceptAtIndex([2,3,4,5]);
