//JavaScript Fundamentals – Part 2

/*
LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'.
       Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
    2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry("Austria", 8.967, "Vienna");

/*
LECTURE: Function Declarations vs. Expressions
    1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value,
       and returns the percentage of the world population that the given population represents.
       For example, China has 1441 million people, so it's about 18.2% of the world population.
    2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.
    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
    4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be 
       the same populations).
*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(9.979);
const population3 = percentageOfWorld1(512);

console.log(population1.toFixed(1));
console.log(population2.toFixed(1));
console.log(population3.toFixed(1));

const calcPercentage = function percentageOfWorld2(population) {
    return (population / 7900) * 100;
}

const population4 = calcPercentage(1441);
const population5 = calcPercentage(9.979);
const population6 = calcPercentage(512);

console.log(population4);
console.log(population5);
console.log(population6);

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const populationArrow1 = percentageOfWorld3 => (1441 / 7900) * 100;
const populationArrow2 = percentageOfWorld3 => (9.979 / 7900) * 100;
const populationArrow3 = percentageOfWorld3 => (512 / 7900) * 100;

console.log(populationArrow1().toFixed(1));
console.log(populationArrow2().toFixed(1));
console.log(populationArrow3().toFixed(1));

/*
LECTURE: Functions Calling Other Functions
    1. Create a function called 'describePopulation'. Use the function type you like the most.
       This function takes in two arguments: 'country' and 'population', and returns a string like this:
       'China has 1441 million people, which is about 18.2% of the world.'
    2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
    3. Call 'describePopulation' with data for 3 countries of your choice
*/

function describePopulation(country, population) {
    return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(1)}% of the world.`);
}

describePopulation("China",1441);
describePopulation("Austria",9.979);
describePopulation("United States of America",512);

console.log("--------- End of Assignments File ---------");
