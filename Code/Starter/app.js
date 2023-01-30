
// function statement
function greet(name) {
    console.log("Hello" + name);
}

greet("John");


// using a function expression
var greetFunction = function (name) {
    console.log("Hello" + name);
};

greetFunction("John");


// using an Immediately Invoked Function Expression (IIFE)
var greeting = function (name) {
    console.log("Hello" + name);
}("John");

console.log(greeting);

// common usage of an IIFE

var firstname = "John";

(function (name) {

    var greeting = "Inside IIFE: Hello";
    console.log(greeting + " " + name);
}(firstname)); // IIFE
