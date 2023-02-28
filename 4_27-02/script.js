// lesson - 4 while, do while, function: declaration, expression, arrow.

// ## HomeWork-1 📚 /////////////////////////////////////
let i = 0;
// for  ↷
for (i; i < 3; i++) {
   console.log(`number ${i}!`);
}

// while ↷
i = 0;
while (i < 3) {
   console.log(`number ${i}!`);
   i++;
}

// do while ↷
i = 0;
do {
   console.log(`number ${i}!`);
   i++;
} while (i < 3);

// ## HomeWork-2 📚 /////////////////////////////////////
// function declaration ↷
function checkAge(age) {
   return age || "Did parents allow you?";
}
// arrow function ↷
// const checkAge = (age) => {
//    return age || "Did parents allow you?";
// }
console.log(checkAge());

// function declaration ↷
function checkAge(age) {
   return age ?? "Did parents allow you?";
}
// arrow function ↷
// const checkAge = (age) => {
//    return age ?? "Did parents allow you?";
// }

console.log(checkAge());

// ## HomeWork-3 📚 /////////////////////////////////////
// function declaration  ↷
function calcMin(a, b) {
   a > b ? console.log(a) : console.log(b);
}
calcMin(100, 20);

// arrow function ↷
// const calcMin = (a, b) => {
//    a > b ? console.log(a) : console.log(b);
// }

// ## HomeWork-4 📚 /////////////////////////////////////
// function declaration  ↷
function calcPow(a, b) {
   console.log(a ** b);
}
calcPow(3, 3);

// arrow function ↷
const calcPow = (a, b) => {
   console.log(a ** b);
}