// 'typeof' , 'instanceof', and Figuring Out What Something Is

var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like forever... Null here is also an Object!! O.o

var z = function (){};
console.log(typeof z); // returns the typeof function! 1st class functions make it possible that u can see the type here!