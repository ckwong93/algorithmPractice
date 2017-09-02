// using while loop

function mergedSortedArray(first,second){
  var indexOne = 0;
  var indexTwo = 0;
  var merged = [];

  while(first[indexOne] || second[indexTwo]){
    if((first[indexOne] && !second[indexTwo]) || first[indexOne] < second[indexTwo]){
      merged.push(first[indexOne]);
      indexOne++
    }
    else{
      merged.push(second[indexTwo]);
      indexTwo++
    }
  }
  return merged
}
