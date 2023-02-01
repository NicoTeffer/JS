// Prototype Lecture

var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

// DON'T DO THIS!

john.__proto__ = person; // John inherit's from person
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
  firstname: "Jane",
};

jane.__proto__ = person; // Jane inherit's from person's Default lastname since it doesn't have a lastname
console.log(jane.getFullName());
