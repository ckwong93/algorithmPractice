// How would you reverse a string in JavaScript?

function reverseString(string){
  converted = ''
  letters = string.split('');
  for(var i = letters.length - 1; i >= 0 ; i--){
    converted += letters[i]
  }
  return converted
}


function reverseString(string){
  var letters = string.split('');
  var converted = [];

  for(var i = 0; i < letters.length; i++){
    converted.unshift(letters[i])
  }
  return converted.join('')
}



function reverseString(string){
  return string.split('').reverse.join('')
}
