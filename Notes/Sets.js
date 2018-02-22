// JavaScript Sets - unique values of any type - similar to an array, but with UNIQUE values only

// example:
let test = new Set();
test.add('first').add('second').add('third').add('fourth');
console.log(test)
// ouput = Set { 'first', 'second', 'third', 'fourth' }

// adding a duplicate will not change the output
test.add('first')
console.log(test)
// ouput = Set { 'first', 'second', 'third', 'fourth' }