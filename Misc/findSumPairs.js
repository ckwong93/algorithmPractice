
// find all sum pairs that add up to a specific number


function findSumPairs(arr,num){
  var success = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 1; j <arr.length; j++){
      if(arr[i] + arr[j] === num){
        success.push(arr[i]);
        success.push(arr[j]);
      }
    }
  }

  for(var k = 0; k < success.length; k+=2){
    console.log("[",success[k],",", success[k+1],"]");
  }
}

findSumPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],15)
