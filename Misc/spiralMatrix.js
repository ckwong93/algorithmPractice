// create a function that prints a matrix in spiral format


// [1,2,3]
// [4,5,6]
// [7,8,9] ---> [1,2,3,6,9,8,7,4,5]

// [1,2,3,4]
// [5,6,7,8]
// [9,10,11,12]
// [13,14,15,16]  ---> [1,2,3,4,8,12,16,15,14,13,9,5,6,7,8,11,10]


function spiralizer(matrix) {
    let col = 0;
    let row = 0;
    let top = 0;
    let bot = matrix.length - 1;
    let left = 0;
    let right = matrix.length - 1;
    let results = [matrix[0][0]];

    while (left <= right && top <= bot) {
        while (col < right) {
            col++;
            results.push(matrix[row][col]);
        }
        while (row < bot) {
            row++;
            results.push(matrix[row][col]);
        }
        right--;
        top++;
        while (col > left) {
            col--;
            results.push(matrix[row][col]);
        }
        while (row > top) {
            row--;
            results.push(matrix[row][col])
        }
        bot--;
        left++;
    }
    return results;
}

