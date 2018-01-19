// You've built an inflight entertainment system with on-demand movie streaming.
// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.
//
// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
//
// When building your function:
//
// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory
// this is similar to two sums problem

// brute force solution with O(n) = n^2, this will loop over the arr twice
function movieChoices(arr,time){

  for(var i = 0;i < arr.length; i++){
    var firstMovie = arr[i];

    for(var j = i + 1; j < arr.length; j++){
      var secondMovie = arr[j];

      if(firstMovie + secondMovie = time){
        return true
      }
    }
  }
  return false
}

// O(n) = n solution
function movieChoice(arr,time){
  var object = {};

  for( var i = 0; i < arr.length; i++){
    var currentTime = arr[i];
    var remainingTime = time - currentTime;

    if(object[remainingTime] === true){
      return true
    }
    else{
      object[currentTime] = true;
    }
  }
  return false
}


// O(n) = n solution using a set
function movieChoice(arr,time){
  var movieSet = new Set();

  for(var i = 0; i < arr.length; i++){
    var firstMovieLength = arr[i];
    var remainingTime = time - firstMovieLength;

    if(movieSet.has(remainingTime)){
      return true;
    }
    else{
      movieSet.add(firstMovieLength);
    }
  }
  return false;
}
