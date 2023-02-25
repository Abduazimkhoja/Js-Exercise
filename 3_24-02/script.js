// lesson - 3 If-else, ternary, switch, Nullish, for, while
// // hw1 📚
// // if else ↷
// if (name === "ECMAScript") console.log(true);
// else console.log(false);

// // Ternary operator ↷
// name === "ECMAScript" ? console.log(true) : console.log(false);

// // Switch ↷
// switch (name) {
//    case "ECMAScript": console.log(true); break;
//    default: console.log(false); break;
// }

// // hw2 📚
// // if else ↷
// if (num > 0) {
//    console.log("if, else " + 1);
// } else if (num < 0) {
//    console.log("if, else " + -1);
// } else {
//    console.log("if, else " + 0);
// }

// // Ternary operator ↷
// num > 0
//    ? console.log("ternaty " + 1)
//    : num < 0
//    ? console.log("ternary " + -1)
//    : console.log("ternary " + 0);

// // Switch ↷ 
// // ----

// // hw3 📚
// // if else ↷
// if (a + b < 4) {
//    console.log("below");
// } else {
//    console.log("over");
// }

// // Ternary operator ↷
// a + b < 4 ? console.log("below") : console.log("over");

// // Switch ↷ 
// // ----

// // hw4 📚
// // if else ↷
// if (login == "Employee") {
//    console.log("hello");
// } else if (login == "Director") {
//    console.log("Greetings");
// } else if (login == "") {
//    console.log("no login");
// } else {
//    console.log("");
// }
// // Ternary operator ↷
// login == "Employee"
//    ? console.log("hello")
//    : login == "Director"
//    ? console.log("Greetings")
//    : login == ""
//    ? console.log("no login")
//    : console.log("");
// // Switch ↷
// switch (login) {
//    case 'Employee': console.log("hello"); break;
//    case 'Director': console.log("Greetings"); break;
//    case '': console.log("no login"); break;
//    default: console.log(""); break;
// }



// // 1)  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
   let day = 11;
// // if else ↷
// let day = 0;
// if (10 > day && day > 0) console.log("первый");
// else if (20 > day && day > 0) console.log("вторая");
// else if (31 > day && day > 0) console.log("третья");
// else console.log("Неверно");

// // Ternary operator ↷
10 > day && day > 0 
   ? console.log("первый")
   : 20 > day && day > 0
   ? console.log("вторая")
   : 31 > day && day > 0
   ? console.log("третья")
   : console.log("Неверно");


// // Switch ↷


