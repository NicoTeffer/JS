// Remember, we're going to use strict mode in all scripts now!
'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// "Keep in mind that sometimes there might be a sensor error!".

const temperatures1 = [3, -2, -6, -1, 9, "error", 13, 17, 15, 14, 9, 5];
const temperatures2 = [17, -11, -12, -46, 9, "error", 22, 17, 123, 14, 11, 5];

// 1) Understanding the problem

// - What is temperature amplitude? Answer: Difference between highest and lowest temperature.
// - How to compute max and min temperatures? Answer:
// - What is a sensor error, and what to do with it? Answer:

// 2) Breaking up the problem into sub-problems

// - How to ignore the Sensor error? Answer:
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps1, temps2) {
    let mergedTemperatures = temps1.concat(temps2);
    let max = mergedTemperatures[0];
    let min = mergedTemperatures[0];
    for (let i = 0; i < mergedTemperatures.length; i++) {
        if (mergedTemperatures[i] > max) {
            max = mergedTemperatures[i];
        }
        if (mergedTemperatures[i] < min) {
            min = mergedTemperatures[i];
        }
    }
    return max - min;
}


const tempAmplitude = calcTempAmplitude(temperatures1, temperatures2);
console.log(`tempAmplitude: ${tempAmplitude}`);

// PROBLEM 2:
// Function should now be able to receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: No, just merge the 2 arrays!

// 2) Breaking up the problem into sub-problems
// - Well how to merge arrays then? Answer:
//      let arr1 = [0, 1, 2];
//      let arr2 = [3, 5, 7];
//      let primes = arr1.concat(arr2);

console.log("---------- script.js End ----------");


