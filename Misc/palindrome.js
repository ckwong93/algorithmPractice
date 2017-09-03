// check if a word is a palindrome
// palindrome -> word is same forwards and backwards
// ex: 'civic', 'lol', 'kayak'

// using own methods
function palindrome(word){
  var letters = word.split('');
  var reversed = '';

  for(var i = letters.length - 1; i >= 0; i--){
    reversed += letters[i];
  }

  if(word === reversed){
    return true
  }else{
    return false
  }
}
palindrome('civic')


// using built in
function palindrome(word){
  return word === word.split('').reverse().join('')
}
