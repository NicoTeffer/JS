// Developer Skills & Editor Setup

/*
Coding Challenge #1

            Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
            Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
            1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
               Try it with both test datasets.
            2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
            § Data 1: [17, 21, 23]
            § Data 2: [12, 5, -5, 0, 4]
*/

// Coding Challenge #1 - My Solution

function printForecast(arr) {
    for (let arrKey in arr) {
        console.log(`... ${arr[arrKey]}°C in ${arr.indexOf(arr[arrKey]) + 1} days`);
    }
}

const testData_v1 = [17, 21, 23];
const testData_v2 = [12, 5, -5, 0, 4];

printForecast(testData_v1);
console.log("--------- End of testData_v1 ---------");
printForecast(testData_v2);
console.log("--------- End of testData_v2 ---------");

console.log("--------- End of Coding challenge Developer Skills & Editor Setup #1 ---------");