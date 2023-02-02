// Built-in Function Constructors
String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}
console.log("\"John\".isLengthGreaterThan(3): " + "John".isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
    return this > 0;
}

var randomNumber = 3;
console.log("randomNumber.isPositive(): " + randomNumber.isPositive());

var negativeNumber = -5;
console.log("negativeNumber.isPositive(): " + negativeNumber.isPositive());

// !! Dangerous Aside !! for using Built-in Function Constructors
var a = 3;
var b = new Number(3);

console.log(a == b);
console.log(a === b);
// It's dangerous to use Built-in Function Constructors for primitive's!

