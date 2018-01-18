// Given a time in -hour AM/PM format, convert it to military (-hour) time.
//
// Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.
//
// Input Format
//
// A single string containing a time in -hour clock format (i.e.:  or ), where  and .
//
// Output Format
//
// Convert and print the given time in -hour format, where .
//
// Sample Input
//
// 07:05:45PM
// Sample Output
//
// 19:05:45

function timeConversion(s) {
    let result;
    var amPm = s.substr(8,2);
    var hours = parseInt(s.substr(0,2));

    if (amPm.toLowerCase() === 'pm') {

        if (hours !== 12) {
            hours += 12;
        }
    } else if (hours === 12) {
        hours = 0;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    result = hours + s.substr(2,6);
    return result
} 
