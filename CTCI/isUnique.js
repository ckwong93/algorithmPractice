// all letters in string are unique

function isUniqueString(string){
  var letters = string.split('');
  var list = {};

  for(var i = 0; i < letters.length; i++){
    // this will iterate through each letter and check if it exists
    // if it doesnt exist, it will be added to the obj. if it does exist, loop will
    // break and it will return false
    if(!list[letters[i]]){
      list[letters[i]] = true
    }
    else{
      return false
    }
  }
  return true
}

// isUniqueString('abcd') => true
// isUniqueString('abcda') => false



// all items in array are unique

function isUniqueArray(array){
  var list = {};

  for(var i = 0; i < array.length; i++){
    if(!list[array[i]]){
      list[array[i]] = true;
    }
    else{
      return false
    }
  }
  return true
}

isUnique([1,23,5,6,23]) => false
isUnique([1,2,3]) => true
