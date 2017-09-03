// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
// Note that 1 is typically treated as an ugly number.

function uglyNum(num){
  if(num <=0){
		return 'number is under 0, so this is not an ugly number'
	}
	else if(num === 1){
		return 'ugly number'
	}
	var divisor = 2;
	var factors = [];
	while(num >= divisor){
		if(num % divisor === 0){
			factors.push(divisor);
			num = num/divisor
		}
		else{
			divisor++
		}
	}
	for(var i = 0; i < factors.length;){
		if(factors[i] === 2 || factors[i] === 3 || factors[i] === 5){
			factors.splice(i,1)
		}
		else{
			i++
		}
	}

	if(factors.length < 1){
		return 'ugly number'
	}
	else{
	  return 'not ugly'
	}
}

console.log(uglyNum(6))
console.log(uglyNum(8))
console.log(uglyNum(14))
