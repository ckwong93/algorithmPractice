// var words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote', // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];
//
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.


function rotationPoint(arr){
  // floor default is first num in arr
  var floor = 0;
  // ceiling default is last num in arr
  var ceiling = arr.length - 1;
  var firstWord = arr[0];

  while(ceiling > floor){
    // select middle number...without the floor + in the beginning, it will go into an infinite loop
    var middleItem = Math.floor(floor + (ceiling - floor)/2);
    // if middle item comes after first word..meaning alphabetically its later on, we change the range of our letters to not include any letters that are before our floor
    if(arr[middleItem] >= firstWord){
      floor = middleItem
    }
    // else if middle item is before, we know that we can eliminate all letters after this mid
    else{
      ceiling = middleItem
    }
    // if there are 2 letters left, floor and ceiling, break and return ceiling
    if(floor++ === ceiling){
      break;
    }
  }
  // ceiling will be the rotation point because no letters will be closer to the left of the first word than the letter that comes earliest(aka ceiling)
  return ceiling;
}
