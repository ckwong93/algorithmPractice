// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.


function climbStairs(n){
  var increments = [1,2];
  var ways = [];

  for(var i = 0; i <= n; i++){
    ways[i] = 0;
  }
  ways[0] = 1;

  increments.forEach(function(step){
    for(var amount = step; amount <=n; amount++){
      var remainder = amount - step;
      ways[amount] += ways[remainder];
    }
  });
  return ways[n];
}
console.log(climbStairs(5));
