// Consider a staircase of size :
//
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of size .
//
// Input Format
//
// A single integer, , denoting the size of the staircase.
//
// Output Format
//
// Print a staircase of size  using # symbols and spaces.
//
// Note: The last line must have  spaces in it.
//
// Sample Input
//
// 6
// Sample Output
//
//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation
//
// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
function staircase(n) {
    // Complete this function
    let arr = [];

    for(var i = 0; i < n; i++){
      arr[i] = " ";
    }
    // console.log(arr)

    for(var j = n; j > 0; j--){
      // console.log(string.charAt(j),'j',j);
      arr[j-1] = "#"
      console.log(arr.join(""));
    }
}
