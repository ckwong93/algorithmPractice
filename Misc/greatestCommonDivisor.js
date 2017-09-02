// return the greatest common divisor between two given numbers
function gcd(first,second){
  var divisor = 1;
  var greatest = null;
  while(divisor <= first && divisor <= second){
    if(first % divisor === 0 && second % divisor ===0){
      greatest = divisor
    }
    divisor++
  }
  return greatest

}

// gcd(25,50)
