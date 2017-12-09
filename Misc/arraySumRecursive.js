// Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21




function arraySummer(numbers){
  let result = 0;

  function sumHelp(i){
    if(i > numbers.length - 1){
      return;
    }
    result += numbers[i];
    sumHelp(i+1);
  }
  sumHelp(0);
  return result;
}

console.log(arraySummer([1,2,3,4,5,6]));
console.log(arraySummer([2,3,4,5,6,2,5,2,1,5,2,1,4]))
