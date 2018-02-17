// JavaScript async-await

// When an async function is called, it returns a Promise.When the async function returns a value, the Promise will be resolved with the returned value.When the async function throws an exception or some value, the Promise will be rejected with the thrown value.

// An async function can contain an await expression, that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

// The purpose of async / await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises.Just as Promises are similar to structured callbacks, async / await is similar to combining generators and promises.

// Inside a function marked as async, you are allowed to place the await keyword in front of an expression that returns a Promise. when you do, the execution of the async funciton is paused until the promise is resolved

// funfunfunction example

// using promises
const fetch = require('node-fetch');

function fetchCatAvatars(userId){
    return fetch(`https://catappapi.herokuapp.com/users/${userID}`)
    .then(function(response){
        return response.json()
    .then(function(user){
        const promises = user.cats.map(function(catID){
            fetch(`https://catappapi.herokuapp.com/cats/${catID}`)
                .then(function(response){
                    return response.json()
                })
                .then(function(catData){
                    return catData.imageUrl
                })
        })
        return Promise.all(promises)
    })
    })
}

const result = fetchCatAvatars(123)
// result equals ['httpimage1,httpimage2,httpimage3']


// async-await version of same code ->this is slower than promise version because it does one at a time, whereas promise version does all at once
function async fetchCatAvatarsAsyncAwait(){
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userID}`);
    const user = await response.json();
    const catImageUrls = [];

    for(const catId of user.cats){
        const response = await fetch(`https://catappapi.herokuapp.com/cats/${catID}`);
        const catData = await response.json();
        catImageUrls.push(catData.imageUrl)
    }
}


// best of both worlds scenario that captures promises + async await
async function fetchCatAvatarsBest(userId){
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userID}`);
    const user = await response.json();

    return await Promise.all(user.cats.map(async function(catId){
        const response = await fetch(`https://catappapi.herokuapp.com/cats/${catID}`);
        const catData = await response.json();
        return catData.imageUrl
    }))
}