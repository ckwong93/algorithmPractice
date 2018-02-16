// Javascript Promises

// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a funcion


// TechSith Example:
let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('I cleaned the room,');
    });
};

let doGarbage = function(result){
    return new Promise(function(resolve,reject){
        resolve(result + ' tossed the garbage,');
    });
};

let wonIceCream = function(result){
    return new Promise(function(resolve,reject){
        resolve(result + ' and won ice cream');
    });
};

cleanRoom().then(function(message){
    return doGarbage(message)
}).then(function(message){
    return wonIceCream(message)
}).then(function(message){
    console.log(message + ' - all complete!')
})


//NetNinja jQuery example
// $.get("data/tweets.json").then(function(tweets){
//     console.log(tweets);
//     return $.get("data/friends.json");
// }).then(function(friends){
//     console.log(friends);
//     return $.get("data/videos.json");
// }).then(function(videos){
//     console.log(videos);
//     console.log('all done!')
// })

// Creating a Promise around an old callback API (Mozilla Docs)
let wait = function(ms){
    return new Promise(function(resolve){
        return setTimeout(resolve,ms)
    });
};

wait(1000).then(function(){
    console.log("1 second passed")
}).then(function(){
    return wait(1000)
}).then(function(){
    console.log("another second passed");
})
