// JavaScript async-await

// When an async function is called, it returns a Promise.When the async function returns a value, the Promise will be resolved with the returned value.When the async function throws an exception or some value, the Promise will be rejected with the thrown value.

// An async function can contain an await expression, that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

// The purpose of async / await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises.Just as Promises are similar to structured callbacks, async / await is similar to combining generators and promises.

// Inside a function marked as async, you are allowed to place the await keyword in front of an expression that returns a Promise. when you do, the execution of the async funciton is paused until the promise is resolved

// funfunfunction example