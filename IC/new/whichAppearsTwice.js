// I have an array of n + 1 numbers.Every number in the range 1..n appears once except for one number that appears twice.

// Write a function for finding the number that appears twice.



function whichAppearsTwice(numbers){
 let counter = {};
 for(var i = 0; i < numbers.length; i++){
     if(counter[numbers[i]]){
         return numbers[i] 
     } else{
         counter[numbers[i]] = 1;
     }
 }
 return 'no dupes found'   
}