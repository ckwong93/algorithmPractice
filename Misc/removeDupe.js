// remove all duplicates from an array

// using for loop
function removeDupe(arr){
  numbers = {};
  uniques = [];
  for(var i = 0; i < arr.length; i++){
    if(numbers[arr[i]]){
      console.log(arr[i], 'is a dupe, will not add to uniques arr')
    }
    else{
      numbers[arr[i]] = true;
      uniques.push(arr[i]);
    }
  }
  return uniques
}


// using a set (if wanted in arr format)
function removeDupe(arr){
  var uniques = new Set();
  arr.forEach(function(item){
    uniques.add(item)
  })
  var array = Array.from(unqiues);
  return array
}


// using set, no arr format req
function removeDupe(arr){
  var uniques = new Set();
  arr.forEach(function(item){
    uniques.add(item);
  })
  return uniques
}
