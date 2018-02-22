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

// removing values
test.delete('first');
console.log(test);
// output = Set { 'second', 'third', 'fourth' }
// ** chaining delete methods does not work - if you console.log(test.delete('first')), it will return a boolean (t/f)

