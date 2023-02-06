


const age = 15;

if (age >= 18) {
    console.log("Old enough! 😊")
} else {
    const yearsLeft = 18 - age;
    console.log(
        `Not old enough! 😒
Please wait another ${yearsLeft} years 🤷‍♀️`
    );
}

const birthYear = 1991;

let century;

if (birthYear <= 2000) {
    century = 20;
}else {
    century = 21;
}
console.log(century);

console.log("--------- End of Script-File ---------");