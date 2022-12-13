var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {};
var spanish = {};

english.greet = "Hello!";
spanish.greet = "Hola!";

console.log(spanish);
console.log(english);

english.greetings = {};

english.greetings.greet = "Hi!";

console.log(english.greetings);

var english = {
  greetings: {
    basic: "Sup!",
  },
};

console.log(english.greetings);
