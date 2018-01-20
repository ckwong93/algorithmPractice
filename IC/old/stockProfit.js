/*
Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
*/


// brute force solution O(n) = 0(n^2)
// Explanation: each item is looped over twice, making it take n^2 times to complete
function getMaxProfit(stockPricesYesterday) {

    var maxProfit = 0;

    // go through every price and time
    for (var earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
        var earlierPrice = stockPricesYesterday[earlierTime];

        // and go through all the LATER prices
        for (var laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
            var laterPrice = stockPricesYesterday[laterTime];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            var potentialProfit = laterPrice - earlierPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }

    return maxProfit;
}

var prices = [5,1,2,3,4,5]
console.log(getMaxProfit(prices))
// expected output = 4
// actual output = 4




// optimal solution
function getMaxProfit(stockPricesYesterday){

if(stockPricesYesterday.length < 2){
  return 'need at least 2 prices'
}
  var lowerPrice = stockPricesYesterday[0];
  var higherPrice = stockPricesYesterday[1];
  // at minimum, the max profit will be difference between first two items
  var maxProfit = higherPrice - lowerPrice;

  for(var i = 1; i < stockPricesYesterday.length; i++){
    // current price is based on current index in loop
    var currentPrice = stockPricesYesterday[i];
    // the lower price will be lesser of lowerPrice and currentPrice
    lowerPrice = Math.min(lowerPrice,currentPrice);
    // higher price will be the greater num of higherPrice and currentPrice
    higherPrice = Math.max(higherPrice,currentPrice);

    var potentialProfit = higherPrice - lowerPrice;
    maxProfit = Math.max(maxProfit,potentialProfit);
  }
  return maxProfit;
}

getMaxProfit([5,1,2,3,4,5]);
console.log(getMaxProfit([7,6,4,3,1]));

// expected output = 4
// actual output = 4
