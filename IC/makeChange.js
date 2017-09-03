function changePossibilitiesBottomUp(amount, denominations) {

  var ways = [];
    for(var i = 0; i <= amount; i++){
      ways[i] = 0;
      // initialize an array where all amounts are 0 -> there are 0 ways to get 5 cents with 0 cents
    }
    ways[0] = 1;
      // with exception of 0 cents to get 0 cents from above
    denominations.forEach(function(coin){
      // for each coin denomination, see how many combinations you can get for the alotted amount
      for(var higherAmt = coin; higherAmt <= amount; higherAmt++ ){
        // higherAmt represents each increment, starting at coin value so that there are no nonsense values - trying to get 3 cents with 5cent coins
        higherRemainder = higherAmt - coin;
        // the difference between the higherAmt and coin is the remainder -> the remainder is used to calculate the amount of combos that can be added
        ways[higherAmt] += ways[higherRemainder]
        // in the ways array, the higher amount is equal to its previous combo from earlier coin + the value of the index of the difference(remainder) between itself and the coin
      }
    })

    return ways[amount];
}

changePossibilitiesBottomUp(6,[1,2,3,4])
// expected output = 9,
// actual output = 9
//
//
//
//
// for visualization purposes:
//
// ways to get amount with denominations
// amt =                  0, 1, 2, 3, 4, 5, 6
// 0c =                 [ 1, 0, 0, 0, 0, 0, 0]
// 0c & 1c =            [ 1, 1, 1, 1, 1, 1, 1] you can get 3cents with 1cent coins 1 way (1c+1c+1c), 5cents with 1cent coins 1 way (1c+1c+1c+1c+1c)
// 0c &1c &2c =         [ 1, 1, 2, 2, 3, 3, 4]
// 0c &1c &2c &3c =     [ 1, 1, 2, 3, 4, 5, 7]
// 0c &1c &2c &3c &4c = [ 1, 1, 2, 3, 5, 6, 9]

// remainder of higheramt - coin is added to the array value at ways[remainder]

// review recursion and memoization!!
