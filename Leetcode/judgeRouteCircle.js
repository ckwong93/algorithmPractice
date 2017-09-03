// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
//
// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
//
// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

function checkRoute(string){
  var sum = 0;
  moves = string.toUpperCase().split('');
  var directions = {
    'L': 1.5,
    'R': -1.5,
    'U': 1,
    'D': -1
  }

  for(var i = 0; i < moves.length; i++){
    sum += directions[moves[i]];
  }

  if(sum === 0){
    return true
  }
  return false
}

console.log(checkRoute('ud'))
console.log(checkRoute('LL'))
console.log(checkRoute('abcd'))
console.log(checkRoute('ududllrrdu'))
