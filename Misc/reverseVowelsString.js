// in a given string, reverse the placement of any vowels


// this approach works only if space is not an issue. runtime is O(n)
// function vowelReverser(string){
//   var vowels = ['a','e','i','o','u'];
//   var saved = [];
//   var letters = string.split('');
//   var newLetters = [];
//
//   for(var i = 0; i < letters.length; i++){
//       if(vowels.indexOf(letters[i]) >= 0){
//         saved.push(letters[i]);
//         // console.log(saved)
//       }
//       newLetters.push(letters[i]);
//   }
//   for(var j = 0; j < newLetters.length; j++){
//     if(vowels.indexOf(newLetters[j]) >= 0){
//       newLetters[j] = saved.pop();
//     }
//   }
//   var finishedProduct = newLetters.join('');
//   return finishedProduct
//
//
// }

// this approach will move the items in place - from Outco interview
function vowelReverser(string){
  var letters = string.split('');
  var fwdindex = 0;
  var bkdindex = letters.length - 1;
  var vowels = ["a","e","i","o","u"];
  var temp = "";

  while(fwdindex <= bkdindex){
    if(vowels.indexOf(letters[fwdindex]) >= 0 && vowels.indexOf(letters[bkdindex]) >=0){
        temp = letters[fwdindex];
        letters[fwdindex] = letters[bkdindex];
        letters[bkdindex] = temp;
    }
        fwdindex++;
        bkdindex--;
  }
  return letters.join('');
}

console.log(vowelReverser('whiteboard'))
// function tester(){
//   var vowels = ['a','e','i','o','u'];
//
//   for(var i = vowels.length -1; i >= 0; i--){
//     var newItem = vowels.pop();
//   console.log(newItem)
//   }
// }
// console.log(tester())
