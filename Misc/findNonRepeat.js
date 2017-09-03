// write a function that finds the first non repeating character in a string
// the quick brown fox jumps then quickly blow air = 'f'


// include space as a character
function findNonRepeat(str){
  var letterDatabase = {};
  var letters = str.split('');

  for(var i = 0; i < letters.length; i++){
    if(letterDatabase[letters[i]]){
      letterDatabase[letters[i]]++;
    }
    else{
      letterDatabase[letters[i]] = 1
    }
  }
  console.log(letterDatabase);
  for(var j in letterDatabase){
    if(letterDatabase[j] === 1 && letterDatabase[j] != " "){
      return j
    }
  }
}

findNonRepeat('the quick brown fox jumps then quickly blow air')


// do not include space as char
function findNonRepeat(str){
  var letterDatabase = {};
  var letters = str.split('');

  for(var i = 0; i < letters.length; i++){
    if(letterDatabase[letters[i]]){
      letterDatabase[letters[i]]++;
    }
    else{
      letterDatabase[letters[i]] = 1
    }
  }

  delete letterDatabase[" "]

  // console.log(letterDatabase);
  for(var j in letterDatabase){
    if(letterDatabase[j] === 1){
      return j
    }
  }
}
