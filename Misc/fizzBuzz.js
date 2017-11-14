// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(num){
  for(var i = 0; i <= num; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz")
    }else if (i % 3 == 0) {
      console.log("Fizz")
    }else if (i % 5 == 0){
      console.log("Buzz")
    }else{
      console.log(i);
    }
  }
}

console.log(fizzBuzz(10));
