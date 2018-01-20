// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
//
// For example:
//
//   var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
//
// getMaxProfit(stockPricesYesterday);
// // returns 6 (buying for $5 and selling for $11)
//


function getMaxProfit(prices){
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];
  let currentPrice;
  let potentialProfit;

  for(var i = 1; i < prices.length; i++){
    currentPrice = prices[i];
    potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(potentialProfit, maxProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit
}

console.log(getMaxProfit([10,7,5,8,11,9]))
