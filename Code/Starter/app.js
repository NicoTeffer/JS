// Object.create and Pure Prototypal Inheritance
var person = {
    firstName: "Default",
    lastName: "Default",
    greet: function () {
        return "Hi " + this.firstName;
    }
}
// Object.create creates an empty object with its prototype pointing at whatever u passed into Object.create!
var john = Object.create(person);
console.log(john); // Empty Object with "person" as its prototype
console.log(john.greet()); // Same empty object with its prototype function inherited from person!

// Overriding the "default" values
john.firstName = "John";
john.lastName = "Doe";
console.log(john); // now its works with the updated values given by the prototype
console.log(john.greet()); // same with the function inherited by the prototype

// Polyfill (Legacy feature where .create doesn't work!)
function polyfill() {

    if (!Object.create) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error("Object.create implementation"
                    + " only accepts the first parameter.");
            }

            function F() {
            }

            F.prototype = o;
            return new F();
        };
    }
}