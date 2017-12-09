// Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]



function integerRange(start,end){
  let results = [];

  function rangeHelper(i){
    if(i === end){
      return;
    }

    results.push(i);
    rangeHelper(i+1);
  }
  rangeHelper(start+1);
  return results;
}

console.log(integerRange(2,9));
