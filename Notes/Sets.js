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

// checking if value exists in set
console.log(test.has('first'), 'has first?');
// output false because it gets deleted above
console.log(test.has('second'), 'has second?')
// output -true

// converting an array with dupes to a set
let testArray = ['a','b','c','d','e','f','f','e','d','c','b','a'];
let testSet = new Set(testArray);
console.log(testSet);
// output = Set { 'a', 'b', 'c', 'd', 'e', 'f' }

// converting a set to an array
let setItems = new Set();
setItems.add('a').add('b').add('c').add('d');
let convertedToArr = [...setItems];
console.log(convertedToArr);
// output ['a', 'b', 'c', 'd']

