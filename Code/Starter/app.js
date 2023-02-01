// Reflection Lecture

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

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}

var jane = {
  address: "111 Main Str.",
  getFormalFullName: function () {
    return this.lastname + ", " + this.firstname;
  },
};

var jim = {
  getFirstName: function () {
    return firstname;
  },
};

_.extend(john, jane, jim);
console.log(john);
