// get the Nth fibonacci Number

// non-recursive
function fibo(n){
  var nums = [0,1];
  if(n <= 2){
    return 1;
  }
  for(var i = 2; i <= n; i++){
    nums[i] = nums[i-1] + nums[i-2]
  }
  return nums[n]
}


// recursively
function fibo(n){
  if(n<=2){
    return 1
  }
  else{
    return fibo(n-1) + fibo(n-2)
  }
}
