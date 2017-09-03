// count all zeroes from 1 up to given number 'n'

function countZeroes(n){
  var count = 0;
  while(n > 1){
    count += Math.floor(n/10);
    n = n / 10;
  }
  return count
}

countZeroes(50)


// explanation:
// for every multiple of 10, there is one 0. we divide number n by 10 to see how many zeroes
// we have. however, for numbers like 100, there are 11 0's (0,10,20...100).
// so we have to be careful to make sure we capture it when it hits triple digits.
// to do that, make it such that after counting once, number n gets reduced by n /10. this way
// if the number is over 100, it will get counted for the 1 that is missing.
