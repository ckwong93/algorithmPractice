// closure - when a function within a function is called, it has access to its lexical scope - aka context variables needed for the inner function


var multiplier = function(base){
  var factor = function(number){
    return base *= number
  }
  return factor;
}

let five = multiplier(5);
five(3)
five(7)



// prints all 6's because i is hoisted to the top. if we add a closure, it will log correctly
// output -> 55555
for (var i = 1; i <= 5; i++) {
    setTimeout(function() { console.log(i); }, 1000+i);
}


for (var i = 1; i <= 5; i++) {
  (function(invoke){
    setTimeout(function() { console.log(invoke); }, 1000);
  })(i);
}
