// !! Dangerous Aside !! Arrays and for..in
Array.prototype.myCustomFeature = "cool!";

var array = ["John", "Jane", "Jim"]; // As an array is an Object every member of the array has its position as its property name

for (var prop in array) {   // That's the reason why u can use [0] for accessing a property for example
    console.log(prop + ": " + array[prop]);
}

// But the fact that an array is an object means that there is a problem when u add via prototype as we see in the above log

// Use instead for-i loops to solve this
