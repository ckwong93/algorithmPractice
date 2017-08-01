// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(firstString,secondString){
  var firstDeconstructed = firstString.split('').sort().join();
  var secondDeconstructed = secondString.split('').sort().join();
  
  // this will reformat the words and put them in alphabetical order
  // for any permutations, the same letters will be used, so having them reformatted
  // will allow them to be exactly the same

  if(firstDeconstructed == secondDeconstructed){
    return 'issa permutation/anagram'
  }
  else{
    return 'not a permutation/anagram'
  }
}


// isPermutation('a','a')
