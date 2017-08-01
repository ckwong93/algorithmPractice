function isPermPalin(string){
  // initialize the character obj, which will store all characters that have been used
  var characters = {};
  // save each item in string inside an array so that we can iterate through
  var listOfChars = string.split('');

  for(var i = 0; i < listOfChars.length; i++){
    // variable is the current item being iterated through
    var currentChar = listOfChars[i];

    // if the character already exists, delete it from the object
    if(characters[currentChar]){
      delete characters[currentChar]
    }else{
      // if char does not exist, add it to object
      characters[currentChar] = true
    }
  }
  // delete item in object that is a space, allowing us to test items with spaces 'taco cat'
  delete characters[" "];
  // if object has 1 or less items after iterations, it is a permutation palindrome
  // this is because each repeated item will be deleted. perm palins can have 1 nonrepeated char
  // for example, 'civic' or 'tacocat' have 1 nonrepeated letter
  return Object.keys(characters).length <=1
}


isPermPalin('tacoca t')
