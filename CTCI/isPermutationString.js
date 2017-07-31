// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(firstString,secondString){
  var firstDeconstructed = firstString.split('').sort().join();
  var secondDeconstructed = secondString.split('').sort().join();

  if(firstDeconstructed == secondDeconstructed){
    return 'issa permutation/anagram'
  }
  else{
    return 'not a permutation/anagram'
  }
}


// isPermutation('a','a')
