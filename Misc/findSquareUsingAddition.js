// Find a square of a number. but you can only use addition or subtraction but no multiplication or division
// by def, a number squared is a number multiplied by itself
// by def, a number multiplied is being added to itself by the multiplier
// 5^2 = 5x5 = 5+5+5+5+5

function findSquare(num){
  var result = null;

  if(num === 0){
    return 'zero squared is undefined';
  }else if(num > 0){
    for(var i = 1; i <= num; i++){
      result += num;
    }
    return result;
  }
  else if(num < 0){
    for(var j = 0; j > num; j--){
      result -= num;
    }
    return result;
  }

}

console.log(findSquare(5));
console.log(findSquare(1));
console.log(findSquare(-5));
console.log(findSquare(-10));
console.log(findSquare(0));
