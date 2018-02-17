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

