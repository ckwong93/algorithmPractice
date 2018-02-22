// JavaScript Sets - unique values of any type - similar to an array, but with UNIQUE values only

// example:
let test = new Set();
test.add('first').add('second').add('third').add('fourth');
// console.log(test)
// ouput = Set { 'first', 'second', 'third', 'fourth' }

// adding a duplicate will not change the output
test.add('first')
// console.log(test)
// ouput = Set { 'first', 'second', 'third', 'fourth' }

// adding reference to objects - it can store a reference to an object. if that object changes, the value of the object within the set will change as well
// var mySet = new Set();

// mySet.add(1); // Set [ 1 ]
// mySet.add(5); // Set [ 1, 5 ]
// mySet.add(5); // Set [ 1, 5 ]
// mySet.add('some text'); // Set [ 1, 5, 'some text' ]
// var o = { a: 1, b: 2 };
// mySet.add(o);

// initiating sets with strings with add each individual letter
// adding strings thereafter will add them to the set normally
var mySet = new Set('hello');
// mySet.add('hello');
// console.log(mySet)
// output = {'h','e','l','o'}
mySet.add('hello');
// output = Set { 'h', 'e', 'l', 'o', 'hello' }

// console.log(o);
// console.log(mySet);
// o.a = 5;
// console.log(o.a);
// console.log(mySet)

// removing values
test.delete('first');
// console.log(test);
// output = Set { 'second', 'third', 'fourth' }
// ** chaining delete methods does not work - if you console.log(test.delete('first')), it will return a boolean (t/f)

// checking if value exists in set
// console.log(test.has('first'), 'has first?');
// output false because it gets deleted above
// console.log(test.has('second'), 'has second?')
// output -true

// checks size of set
// console.log(test.size,'size')

// converting an array with dupes to a set
let testArray = ['a','b','c','d','e','f','f','e','d','c','b','a'];
let testSet = new Set(testArray);
// console.log(testSet);
// output = Set { 'a', 'b', 'c', 'd', 'e', 'f' }

// converting a set to an array
let setItems = new Set();
setItems.add('a').add('b').add('c').add('d');
let convertedToArr = [...setItems];
// console.log(convertedToArr);
// output ['a', 'b', 'c', 'd']

//  iterating through a set
let iterativeSet = new Set();
iterativeSet.add('a').add('b').add('c').add('d');
// for(let item of iterativeSet){
//     console.log(item);
// }
// output = a b c d

// iterating through set using forEach
// iterativeSet.forEach(function (item) {
//     console.log(item)
// })
// output = a b c d
