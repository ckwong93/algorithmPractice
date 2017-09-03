// remove duplicate characters from a string

function removeDuplicateChar(str){
  var letters = str.split('');
  var dictionary = {};
  var converted = '';

  for(var i = 0; i < letters.length; i++){
    if(dictionary[letters[i]]){
      dictionary[letters[i]]++
    }
    else{
      dictionary[letters[i]] = 1
    }
  }

  for(j in dictionary){
    if(dictionary[j] === 1){
      converted += j
    }
  }
  return converted
}


removeDuplicateChar('Learn more javascript dude');
  // = "Lnmojvsciptu"
