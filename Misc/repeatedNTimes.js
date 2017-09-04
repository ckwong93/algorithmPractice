// Display number which is repeated for n times in an array
// given [0,5,2,5,2,5,6,2,3,5,6,3,9,99,9,9,5,6] find the number that is repeated 5 times -> 5

function repeatedNTimes(arr,num){
  var counter = {};
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(counter[arr[i]]){
      counter[arr[i]]++;
    }
    else{
      counter[arr[i]] = 1;
    }
  }

  for(var item in counter){
    if(counter[item] == num){
      output.push(item);
    }
  }
  return output;
}

console.log(repeatedNTimes([0,5,2,5,2,5,6,2,3,5,6,3,9,99,9,9,5,6],5));
