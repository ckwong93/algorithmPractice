// // reverse words in place in a sentence
// // 'i am cool' - > 'i ma looc'

function reverseInPlace(string){
  var converted = '';
  var separated = string.split(' ');

  for(var i = 0; i < separated.length; i++){
    var reverseArr = separated[i].split('');
    console.log(reverseArr)
    reverseArr = reverseArr.reverse().join('');
    converted += reverseArr + ' '
  }
  return converted = converted.substr(0,converted.length - 1)
}

reverseInPlace("i am cool")
// equals 'i ma looc'
