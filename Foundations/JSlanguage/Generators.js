// JavaScript Generator

// A generator is essentially a pausable function using 'yield'. doing so lets you pause and resume the function whenever seems fitting. this is a very useful tool with asynchronous code

// Net Ninja Example - console logging using yield
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


// example showing yield object - value and done properties
function* gen2(){
    yield 'car';
    yield 'toy';
    yield 'ball'
}

// inits newGen2 as instance of gen2 generator
// let newGen2 = gen2();

// runs up to first yield. in this format, car is saved into an object - {value: 'car', done: false}
// console.log(newGen2.next());

// we can also pull off value from the object itself - results in 'toy' because .next is run during this operation
// console.log(newGen2.next().value);

// runs up to second yield.in this format, car is saved into an object - { value: 'toy', done: false }
// console.log(newGen2.next());

// runs up to third yield.in this format, car is saved into an object - { value: 'ball', done: false }
// console.log(newGen2.next());

// runs after third yield. since there is nothing left, we have an object with undefined value and done - true { value: undefined, done: true}
// console.log(newGen2.next());


// example passing in variables which will be saved within generator
function* gen3(){
    let x = yield 'house';
    let y = yield 'apartment';
    let z = yield 'hut';
    console.log('house price', x) ;
    console.log('apartment price', y);
    console.log('hut price', z);    
}

// creates new instance of gen3
let newGen3 = gen3();

// runs up to first yield - object is { value: 'house', done: false}
console.log(newGen3.next());

// saves value of x as 1000000 & runs up to second yield - object is { value: 'apartment', done: false}
console.log(newGen3.next(1000000));

// saves value of y as 500000 & runs up to third yield - object is { value: 'hut', done: false}
console.log(newGen3.next(500000));

// saves value of z as 5, logs to console price and variable. then returns object with value undefined and done - true { value: undefined, done: true}
console.log(newGen3.next(5));



