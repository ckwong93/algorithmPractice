// find and return all of the prime numbers up to given number 'n'

function displayPrimes(n){
  var primes = [];
  for(var i = 1; i < n; i++){
    if(isPrime(i) === true){
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(n){
  for(var i = 2; i < n; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
console.log(displayPrimes(1116));
