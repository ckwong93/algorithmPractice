// javascript calls allow you to combine two unlinked items - ex) calling a function using properties that are unlinked
var obj = {num:2};

// notice we dont have (this.num) property so we will get an error when trying to run this
var addToThis = function(a,b,c){
  return this.num + a + b + c;
}

// javascript call lets us combine the num property of the object with the function and argument(3)
// "attaches function to object temporarily and then runs it and gives result back as if it is a part of the object itself"
console.log(addToThis.call(obj,1,2,3))
// output returns 8



// javascript apply is similar - althought you don't need to pass in all the arguments separately. you can pass them in an array and it will Homework
var arr = [1,2,3];
console.log(addToThis.apply(obj,arr));
// output returns 8










// -----------------------------
// *******w3schools JavaScript call method********
// The call() method is a predefined JavaScript function method. It can be used to invoke (call) a function with an owner object as the first argument (parameter). With call(), you can use a method belonging to another object.

// This example calls the fullName function of person, but is using it on myObject:
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(myObject);  // Will return "Mary Doe"





// -----------------------------
// *******w3schools JavaScript apply method********
// The JavaScript apply() Method
// The apply() method is similar to the call() method:
// The only difference is: call() takes any function arguments separately. apply() takes any function arguments as an array. The apply() method is very handy if you want to use an array instead of an argument list.

// Example
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.apply(myObject);  // Will return "Mary Doe"





// -----------------------------
// *******w3schools JavaScript bind method********
