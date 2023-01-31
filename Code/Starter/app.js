var person = {
  firstname: "john",
  lastname: "doe",
  getFullName: function () {
    var fullName = this.firstname + " " + this.lastname;
    return fullName;
  },
};

var logName = function (lang1, lang2) {
  console.log("logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("------------------");
};

var logPersonName = logName.bind(person);

logPersonName("en", "es");

logName.call(person, "en", "es"); // invokes the function with certain parameters

logName.apply(person, ["en", "es"]); // takes an array of parameters

// function borrowing
var person2 = {
  firstname: "jane",
  lastname: "doe",
};

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByFive = multiply.bind(this, 5);
console.log(multiplyByFive(2));
