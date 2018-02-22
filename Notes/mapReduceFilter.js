// JavaScript functional programming

// higher-order function: a function that takes in another function as an argument or returns a function as a result


// these functions DO NOT MUTATE the original numbers array, but instead make a copy and perform the iterations based on that copy

// Map - perform same action to each item in the array
let numbers = [5,10,15,20,25,30];
console.log(numbers.map(function(item){
    return item += 5;
}))
// output = [10, 15, 20, 25, 30, 35]

// Filter - for each item in the array, returns items that fit the conditions set in the callback function
console.log(numbers.filter(function(item){
    return item % 2 !== 0;
}))
// output = [5, 15, 25];


// Reduce - for each item in the array, perform an action in the callback function that will accumulate based on second provided input value 
console.log(numbers.reduce(function(item,result){
    return result += item;
}))


// funfunfunction examples
let animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

// filter example - filter to retrieve only dogs
let dogs = animals.filter(function(animal){
    return animal.species === 'dog'
})
console.log(dogs);
// output = [{ name: 'Caro', species: 'dog' },
// { name: 'Hamilton', species: 'dog' }]

// map example