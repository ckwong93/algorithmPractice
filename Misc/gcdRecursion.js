// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.


function gcd(num1,num2){
  let result = 1;

  function gcdHelper(i){
    if(i > num1 || i > num2){
      return;
    }
    if(num1 % i === 0 && num2 % i === 0){
      result = i;
    }
    gcdHelper(i+1);
  }
  gcdHelper(1);
  return result;
}


console.log(gcd(32,78));
console.log(gcd(75,125))
