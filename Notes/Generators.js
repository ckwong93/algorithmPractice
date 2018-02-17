// JavaScript Generator

// A generator is essentially a pausable function using 'yield'. doing so lets you pause and resume the function whenever seems fitting. this is a very useful tool with asynchronous code

// Net Ninja Example
function* gen(){
    yield console.log('pear');
    yield console.log('apple');
    yield console.log('banana');   
}

// let newGen = gen();
// inits newGen as a gen()

// newGen.next();
// runs up to first yield. output = 'pear'

// newGen.next();
// runs up to second yield. output = 'apple'

// newGen.next();
// runs up to third yield. output = 'banana'


function* gen2(){
    yield 'car';
    yield 'toy';
    yield 'ball'
}

// inits newGen2 as instance of gen2 generator
let newGen2 = gen2();

// runs up to first yield. in this format, car is saved into an object - {value: 'car', done: false}
console.log(newGen2.next());

// we can also pull off value from the object itself - results in 'toy' because .next is run during this operation
// console.log(newGen2.next().value);

// runs up to second yield.in this format, car is saved into an object - { value: 'toy', done: false }
console.log(newGen2.next());

// runs up to third yield.in this format, car is saved into an object - { value: 'ball', done: false }
console.log(newGen2.next());

// runs after third yield. since there is nothing left, we have an object with undefined value and done - true { value: undefined, done: true}
console.log(newGen2.next());

