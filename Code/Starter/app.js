// Initialization - Lecture

var people = [
    {
        // The "John" object
        firstname: "John",
        lastname: "Doe",
        address: [
            "111 Main St.",
            "222 Third St."
        ]
    },
    {
        // The "Jane" object
        firstname: "Jane",
        lastname: "Doe",
        address: [
            "333 Main St.",
            "444 Fifth St."
        ],
        greet: function () {
            return "Hello";
        }
    }
];

console.log(people[0]);
console.log(people[1]);
console.log(people[1].greet());