// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.



function fizzBuzz(number){
  let results = [];
  for(var i = 1; i <= number; i++){
    if(i % 3 === 0 && i % 5 === 0){
      results.push("FizzBuzz");
    }
    else if ( i % 3 === 0){
      results.push("Fizz");
    }
    else if (i % 5 === 0){
      results.push("Buzz")
    }
    else{
      results.push(i)
    }
  }
  return results;
}

console.log(fizzBuzz(5));
