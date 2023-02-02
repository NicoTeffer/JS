// Function Constructors and "Prototype" - Lecture
function Person(firstName, lastName) { // Function that assigns a new Object with its code

    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("This function is invoked!");
    // Functions could be set also here, but it would add the functions for every Object created!
    // Since this is a huge waste of memory space functions are passed via the prototype!
}

Person.prototype.getFullName = function () { // adding the function for object Person via prototype
    return this.firstName + " " + this.lastName;
}

var john = new Person("John", "Doe");
console.log(john);

var jane = new Person("Jane", "Doe");
console.log(jane);

Person.prototype.getFormalFullName = function () {
    return this.lastName + ", " + this.firstName;
}
console.log(john.getFormalFullName());
