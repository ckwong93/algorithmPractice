// find all prime factors of a number


// in one function
function primeFactors(num){
  factors = [];
  for(var divisor = 2; divisor < num; divisor ++){
    if(num % divisor === 0){
      factors.push(divisor);
      num /= divisor;
    }
  }
  return factors
}

// multi function

function isPrime(num){
  var divisor = 2;
  while(num > divisor){
    if(num % divisor === 0){
      return false
    }
    else{
      divisor++
    }
  }
  return true
}

function primeFactors(num){
  var factors = [];
  for(var divisor = 2; divisor < num; divisor ++){
    if(num % divisor === 0){
      factors.push(divisor);
    }
  }
  var primeFactors = [];
  for(var i = 0; i < factors.length; i++){
    if(isPrime(factors[i])){
      primeFactors.push(factors[i])
    }
  }
  return primeFactors
}
