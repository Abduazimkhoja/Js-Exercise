// lesson - 3 If-else, ternary, switch, Nullish, for, while

let title = "ECMAScript";
// ## HomeWork-1 📚
// if else ↷
if (title === "ECMAScript") console.log(true);
else console.log(false);

// Ternary operator ↷
title === "ECMAScript" ? console.log(true) : console.log(false);

// Switch ↷
switch (title) {
   case "ECMAScript":
      console.log(true);
      break;
   default:
      console.log(false);
      break;
}

// ## HomeWork-2 📚
let num = 1;
// if else ↷
if (num > 0) console.log("if, else " + 1);
else if (num < 0) console.log("if, else " + -1);
else console.log("if, else " + 0);

// Ternary operator ↷
num > 0
   ? console.log("ternaty " + 1)
   : num < 0
   ? console.log("ternary " + -1)
   : console.log("ternary " + 0);

// ## HomeWork-3 📚
let a = 1,
   b = 1;
// if else ↷
if (a + b < 4) console.log("below");
else console.log("over");

// Ternary operator ↷
a + b < 4 ? console.log("below") : console.log("over");

// ## HomeWork-4 📚
let login = "Employee";
// if else ↷
if (login == "Employee") console.log("hello");
else if (login == "Director") console.log("Greetings");
else if (login == "") console.log("no login");
else console.log("");

// Ternary operator ↷
login == "Employee"
   ? console.log("hello")
   : login == "Director"
   ? console.log("Greetings")
   : login == ""
   ? console.log("no login")
   : console.log("");

// Switch ↷
switch (login) {
   case "Employee":
      console.log("hello");
      break;
   case "Director":
      console.log("Greetings");
      break;
   case "":
      console.log("no login");
      break;
   default:
      console.log("");
      break;
}

// ## HomeWork-5 📚 PRIME NUMBER:
// if else ↷
let pick = "2 3 5 7";
for (let i = 1; i <= 100; i += 2) {
   if (i != 1 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      pick += ` ${i}`;
   }
}
console.log(pick);


// 1)  В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 11;
// if else ↷
if (10 > day && day > 0) console.log("первый");
else if (20 > day && day > 0) console.log("вторая");
else if (31 > day && day > 0) console.log("третья");
else console.log("Неверно");

// Ternary operator ↷
10 > day && day > 0
   ? console.log("первый")
   : 20 > day && day > 0
   ? console.log("вторая")
   : 31 > day && day > 0
   ? console.log("третья")
   : console.log("Неверно");


// 2) В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 5;
// if else ↷
if ((month <= 2 && month > 0) || month === 12) console.log("Зима");
else if (month >= 3 && month <= 5) console.log("Весна");
else if (month >= 6 && month <= 8) console.log("лето");
else if (month >= 9 && month <= 11) console.log("осень");

// Ternary operator ↷
(month <= 2 && month > 0) || month === 12
   ? console.log("Зима")
   : month >= 3 && month <= 5
   ? console.log("Весна")
   : month >= 6 && month <= 8
   ? console.log("лето")
   : month >= 9 && month <= 11
   ? console.log("осень")
   : console.log("Неверно");

// Switch ↷
switch (month) {
   case 12:
   case 1:
   case 2:
      console.log("Зима");
      break;
   case 3:
   case 4:
   case 5:
      console.log("Весна");
      break;
   case 6:
   case 7:
   case 8:
      console.log("лето");
      break;
   case 9:
   case 10:
   case 11:
      console.log("осень");
      break;
   default:
      console.log("Неверно");
      break;
}

// 3) Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
