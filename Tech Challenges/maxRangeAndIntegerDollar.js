// find max range sum within an array

function maxRangeSum(prices) {
    // CurrMax and totalMax start at prices[1] because prices[0] indicates N, the numbers of days. The rest of the array indicates D, the gain or loss for that day
    let currMax = prices[1];
    let totalMax = prices[1];

    for (let i = 2; i < prices.length; i++) {
        // Checks if current max plus next item is greater than the next item itself
        currMax = Math.max(currMax + prices[i], prices[i]);
        // Sets totalMax as higher value of currentMax and totalMax
        totalMax = Math.max(currMax, totalMax);
    }
    // If there is no maximum possible gain (meaning profit is negative, return 0)
    return totalMax > 0 ? totalMax : 0;
}

// Test 1
console.log(maxRangeSum([10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6]));
