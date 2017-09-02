// reverse words in a sentence
// hello sir good day -> day good sir hello

// built in
function reverseWords(str){
  str.split(' ').reverse().join()
}



// created method
function reverseWords(str){
  separated = str.split(' ');
  combined = '';

  for(var i = separated.length - 1; i >= 0 ; i--){
    combined += separated[i];
    combined += ' '
  }
  combined = combined.substring(0,combined.length - 1)
}
// substring method takes values from first index to second index, so in this case
// we will take everything but the last value in string ( which will always be a string because
// we add a space to end of each word)
