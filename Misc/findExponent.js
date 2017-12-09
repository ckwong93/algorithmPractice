// Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.




function findExponent(base,num){
  let result = 1;
  let counter = 0;
  function exponentHelper(i){
    if(result === num){
      return;
    }
    result *= base;
    counter +=1;
    exponentHelper(i+1);
  }
  exponentHelper(1);
  return counter;
}



console.log(findExponent(2,16));
console.log(findExponent(5,625));
