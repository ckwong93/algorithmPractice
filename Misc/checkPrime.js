// check if a given number is prime

// using for loop
function isPrime(num){
  for(var divisor = 2; divisor < num; divisor++){
    if(num % divisor === 0){
      console.log(divisor)
      return 'NOT PRIME'
    }
  }
  return 'PRIME...OPTIMUS PRIME'
}

// using while loop
function isPrime(num){
  var divisor = 2;

  while(num > divisor){
    if(num % divisor === 0){
      return 'NOT PRIME'
    }
    else{
      divisor++
    }
  }
  return 'PRIME...OPTIMUS PRIME'
}
