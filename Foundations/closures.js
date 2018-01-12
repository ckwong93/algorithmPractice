// Eloquent Javascript - This feature—being able to reference a specific instance of local variables in an enclosing function—is called closure. A function that “closes over” some local variables is called a closure. This behavior not only frees you from having to worry about lifetimes of variables but also allows for some creative use of function values.

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

// prints in order because the function is immediately invoked (IIFE)
// output -> 1 2 3 4 5
for (var i = 1; i <= 5; i++) {
  (function(invoke){
    setTimeout(function() { console.log(invoke); }, 1000);
  })(i);
}
