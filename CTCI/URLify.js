function URLify(string){
  var array = string.split('');
  var completed = ''

  for(var i = 0; i < array.length; i++){
    // this will loop through the letters and swap out spaces with %20
    if( array[i] == ' ' ){
      completed += '%20'
    } else{
      completed += array[i]
    }
  }
  return completed
}

URLify('will this function work')
