// 3. RGB Set
//
// Given a string of characters where each character is either 'r', 'g', or 'b', determine the number of complete sets of 'rgb' that can be made with the characters.
//
// Parameters
// Input: str {String}
// Output: {Integer}
//
// Constraints
// Time: O(N)
// Space: O(1)
//
// Examples
// 'rgbrgb' --> 2
// 'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7
// 'bbrr' --> 0
//



function rgbSet(string){
  var letterCount = {};
  var letters = string.split('');

  for(var i = 0; i < letters.length; i++){
    if(letterCount[letters[i]]){
      letterCount[letters[i]]++;
    }else{
      letterCount[letters[i]] = 1;
    }
  }
  // console.log(letterCount.r);
  if(letterCount.r > 0 && letterCount.g > 0 && letterCount.b > 0){
    return Math.min(letterCount.r,letterCount.g,letterCount.b);
  }else{
    return 0;
  }
}

console.log(rgbSet('rgbrgb'));
console.log(rgbSet('rbgrbrgrgbgrrggbbbbrgrgrgrg'));
console.log(rgbSet('bbrr'));
