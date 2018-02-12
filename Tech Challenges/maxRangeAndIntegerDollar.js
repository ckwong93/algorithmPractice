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



// convert integers to text dollars

// Time Complexity: O(1);
// Space Complexity: 0(1);

function numberConverter(num) {
    // handles 0 - 19
    const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    // handles 20 - 90
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    // handles 1000 - 1000000
    const thousands = ['', 'Thousand', 'Million'];
    let converted = '';

    if (num === 0) { return 'Zero'; }

    for (let i = thousands.length - 1; i >= 0; i -= 1) {
        let divisor = 1000 ** i;
        // check if number is greater than or equal to the divisor to the power of i. If it is, run the helper method to append the current section of the number translation. Then, grab the result of the number modulo the divisor to find the rest of the translation 
        if (num >= divisor) {
            converted += helper(Math.floor(num / divisor));
            converted += thousands[i];
            num %= divisor;
        }
    }

    converted += 'Dollars'
    return converted;

    function helper(digit) {
        let numString = '';
        // Converts numbers >=100 and <1000. Afterwards, it reduces digit value to find the rest of the number translation
        if (digit >= 100) {
            numString += ones[Math.floor(digit / 100)];
            numString += 'Hundred';
            digit %= 100;
        }
        // Converts numbers >= 20 and <100. Afterwards, it reduces digit value to find the rest of the number translation
        if (digit >= 20) {
            numString += tens[Math.floor(digit / 10)];
            digit %= 10;
        }
        // Converts numbers <20. Afterwards, it reduces digit value to find the rest of the number translation
        if (digit > 0) {
            numString += ones[digit];
        }
        return numString;
    }
}

// console.log(numberConverter(3));
// console.log(numberConverter(466));
// console.log(numberConverter(1234));
console.log(numberConverter(10));
console.log(numberConverter(21));
