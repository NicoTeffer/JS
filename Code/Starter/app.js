// Function Constructors and how "new" works - Lecture
function Person(firstName, lastName) { // Function that assigns a new Object with its code

    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("This function is invoked!");

}

var john = new Person("John", "Doe");
console.log(john);

var jane = new Person("Jane", "Doe");
console.log(jane);