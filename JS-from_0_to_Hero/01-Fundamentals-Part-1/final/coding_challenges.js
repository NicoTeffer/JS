//JavaScript Fundamentals – Part 1

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

    BMI = mass / [height ** 2] = mass / (height * height) (mass in kg and height in meter).

Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

*/

// Coding Challenge #1 - My Solution

// Data §1
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

// Data §2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

// Calculation functions
function bmiCalc_v1(mass, height) {
    return mass / (height ** 2);
}

function bmiCalc_v2(mass, height) {
    return mass / (height * height);
}

// Encapsulation and code cleanup (DRY-ing in case there is code repetition)
const participant1 = "Mark";
const participant2 = "John";
const testData_version1 = "Test Data v1";
const testData_version2 = "Test Data v2";
const fn_version1 = "bmiCalc_v1";
const fn_version2 = "bmiCalc_v2";

function consoleMessage(participantName, testData, fn_v, result) {
    return "BMI of " + participantName + " with " + testData + " using " + fn_v + ": " + result;
}

// Result output
let bmiCalculation_Mark_Data1_v1 = bmiCalc_v1(markMass1, markHeight1);
console.log(consoleMessage(participant1, testData_version1, fn_version1, bmiCalculation_Mark_Data1_v1));
let bmiCalculation2_Mark_Data2_v2 = bmiCalc_v2(markMass2, markHeight2);
console.log(consoleMessage(participant1, testData_version2, fn_version2, bmiCalculation2_Mark_Data2_v2));

let bmiCalculation_John_Data1_v1 = bmiCalc_v1(johnMass1, johnHeight1);
console.log(consoleMessage(participant2, testData_version1, fn_version1, bmiCalculation_John_Data1_v1));
let bmiCalculation_John_Data2_v2 = bmiCalc_v2(johnMass2, johnHeight2);
console.log(consoleMessage(participant2, testData_version2, fn_version2, bmiCalculation_John_Data2_v2));

// Comparison output
let markHigherBMI_Data_v1 = bmiCalculation_Mark_Data1_v1 > bmiCalculation_John_Data1_v1;
console.log("markHigherBMI Data_v1= " + markHigherBMI_Data_v1);
let markHigherBMI_Data_v2 = bmiCalculation2_Mark_Data2_v2 > bmiCalculation_John_Data2_v2;
console.log("markHigherBMI Data_v2= " + markHigherBMI_Data_v2);
console.log("--------- End of Coding challenge #1 ---------");

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI.
    The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/

// Coding Challenge #2 - My Solution

function compareBmiConditionals(bmi_data, calc_data_Mark, calc_data_John) {
    if (bmi_data) {
        console.log(`${participant1}'s BMI (${calc_data_Mark}) is higher than ${participant2}'s (${calc_data_John})!`);
    } else {
        console.log(`${participant2}'s BMI (${calc_data_John}) is higher than ${participant1}'s (${calc_data_Mark})!`);
    }
}

compareBmiConditionals(markHigherBMI_Data_v1, bmiCalculation_Mark_Data1_v1, bmiCalculation_John_Data1_v1);
compareBmiConditionals(markHigherBMI_Data_v2, bmiCalculation2_Mark_Data2_v2, bmiCalculation_John_Data2_v2);
console.log("--------- End of Coding challenge #2 ---------");

/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins a trophy!

Your tasks:
        1. Calculate the average score for each team, using the test data below
        2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
           Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
        3. Bonus 1: Include a requirement for a minimum score of 100.
           With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
           Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
        4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and
           both have a score greater or equal 100 points.
           Otherwise, no team wins the trophy

Test data:
        § Data 1:           Dolphins score 96, 108 and 89.
                            Koalas score 88, 91 and 110.
        § Data Bonus 1:     Dolphins score 97, 112 and 101.
                            Koalas score 109, 95 and 123.
        § Data Bonus 2:     Dolphins score 97, 112 and 101.
                            Koalas score 109, 95 and 106

*/

// Coding Challenge #3 - My Solution

let teamDolphinsAverage;
let teamKoalasAverage;

function calculateAverageScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

teamDolphinsAverage = calculateAverageScore(97, 112, 101);
console.log("teamDolphinsAverage: " + teamDolphinsAverage);
teamKoalasAverage = calculateAverageScore(109, 95, 106);
console.log("teamKoalasAverage: " + teamKoalasAverage);

if (teamDolphinsAverage > teamKoalasAverage && teamDolphinsAverage >= 100) {
    console.log("Team Dolphin's wins!");
} else if (teamKoalasAverage > teamDolphinsAverage && teamKoalasAverage >= 100) {
    console.log("Team Koala's wins!");
} else if ((teamDolphinsAverage === teamKoalasAverage) && (teamDolphinsAverage && teamKoalasAverage >= 100)) {
    console.log("It's a draw!");
} else {
    console.log("No Team wins!");
}

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

Your tasks:
    1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
       It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
    2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 316.25”

Test data:
    § Data 1: Test for bill values 275, 40 and 430

Hints:
    § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
    § Value X is between 50 and 300, if it's >= 50 && <= 300

 */

// Coding Challenge #4 - My Solution

let value = 430;
let tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.20;

console.log(`billValue: ${value}, tip: ${tip} & finalValue: ${value + tip}`);

console.log("--------- End of Coding challenge #3 ---------");