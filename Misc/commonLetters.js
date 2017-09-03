// create a function that takes two words and outputs the common letters found

function commonLetters(word1,word2){
  var letters = {};
  var firstSplit = word1.split('');
  var secondSplit = word2.split('');

  for(var i = 0; i < firstSplit.length; i++){
    if(letters[firstSplit[i]]){
      letters[firstSplit[i]]++
    }
    else{
      letters[firstSplit[i]] = 1
    }
  }

  for(var j = 0; j < secondSplit.length; j++){
    if(letters[secondSplit[j]]){
      letters[secondSplit[j]]++
    }
    else{
      letters[secondSplit[j]] = 1
    }
  }
   return multiLetters(letters)
}

function multiLetters(object){
  var multipleOccurences = [];

  for(var i in object){
    if(object[i] > 0){
      multipleOccurences.push(i)
    }
  }
  return multipleOccurences
}
console.log(commonLetters('nostradamus','flosstradamus'))
