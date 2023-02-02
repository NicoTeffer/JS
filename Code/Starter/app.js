// ES6 and Classes

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return "Hi " + this.firstName;
    }
}

var john = new Person("John", "Doe");
console.log(john);

class InformalPerson extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    greet() {
        return "Yo " + this.firstName;
    }
}

var informalJohn = new InformalPerson("John", "Doe");
console.log(informalJohn);
