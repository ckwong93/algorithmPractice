// One Away: There are three types of edits that can be performed on
// strings: insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, pIe -> true pales. pale -> true pale. bale -> true pale. bake -> false

function oneAway(string1,string2){

  function checkForMissing(first,second){
    // if diff length of two string, auto fail
    if(first.length !== second.length-1){
      return false
    }
    else{
      // validator will be the 1 item diff leeway, if validator appears more then once, auto fail
      var validator = false;
      var firstIndex = 0;
      var secondIndex = 0;

      while( firstIndex < first.length){
        if( first[firstIndex] !== second[secondIndex]){
          if(validator){
            return false;
          }
          else{
            validator = true;
          }
        }
        else{
          firstIndex++;
          secondIndex++;
        }
      }
      return true;
    }

  }

  function checkForDiff(first,second){
    if(first.length !== second.length){
      return false;
    }
    else{
      var validator = false;

      var firstIndex = 0;
      var secondIndex = 0;

      while(firstIndex < first.length){
        if(first[firstIndex] !== second[secondIndex]]){
          if(validator){
            return false
          }
          else{
            validator = true
          }
        }
        firstIndex++;
        secondIndex++
      }
      return true;
    }
  }



 return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2)

}

console.log(oneAway('civic', 'civci'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
