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
let bmiCalculation_John_Data1_v2 = bmiCalc_v2(johnMass2, johnHeight2);
console.log(consoleMessage(participant2, testData_version2, fn_version2, bmiCalculation_John_Data1_v2));
