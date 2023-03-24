//lesson 9 array 1/3
// 1
console.log("1↴");
const calcSumArr = (arr) => {
   console.log(eval(arr.join("+")));
}
calcSumArr([3,4,5,754,6,7,42,458,54])

// 2
console.log("2↴");
let arr = ["webbrain", "academy"];
// let obj = {}
const charsOfNum = (arr) => {
   str = Array.from(arr.join(""));
   let obj = {};
   str.forEach((value, index) => {
      if (value in obj) {
         obj[value]++;
      } else {
         obj[value] = 1;
      }
   });
   console.log(obj);
};
charsOfNum(arr);

// 3
console.log("3↴");
const arrComparison = (one, two) => {
   one = one.join(""), 
   two = two.join("");
   console.log(one.includes(two));
};
arrComparison([1,2,3,[1,2],"hello"], [1,2,3,[1,2],"hello"]);

// 4
console.log("4↴");
const camelize = (str) => {
   let res = str.split("-")
   let strIndex = str.indexOf("-")+1
   console.log(str[strIndex].toUpperCase());
} 
camelize("background-color"); // backgroundColor
// camelize("list-style-image");

// 5
console.log("5↴");
let user = [
   {id: 1, year: 1998, engine: 1, name: "Tiko"},
   {id: 2, year: 2005, engine: 1.2, name: "Matiz"},
   {id: 3, year: 2010, engine: 1.6, name: "Gentra"},
   {id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
   {id: 5, year: 2012, engine: 2, name: "Malibu"},
   {id: 6, year: 2000, engine: 1.2, name: "Damas"},
   {id: 7, year: 2018, engine: 2.4, name: "Tracker"},
];

console.log("< 2000", user.filter(item => item.year < 2000));
console.log("> 2010", user.filter(item => item.year > 2010));
console.log("Engine sort", user.sort((a,b) => a.engine - b.engine));
console.log("Year sort", user.sort((a,b) => a.year - b.year));
console.log("Alphabet sort", user.sort((a,b) => a.name.localeCompare(b.name)));
console.log("Alphabet sort", user.sort((a,b) => a.name.localeCompare(b.name)));
console.log("< 2000", user.map(item => {if (item.year < 2000) {item.status = "eski"}; return item}));
console.log("2010 <= item <= 2000", user.map(item => {if (item.year >= 2000 && item.year <= 2010) {item.status = "orta"}; return item}));
console.log("> 2010", user.map(item => {if (item.year > 2010) {item.status = "yangi"}; return item}));




// let numNameArr = [
//    "nol",
//    [
//       "",
//       "bir ",
//       "iki ",
//       "uch ",
//       "tor ",
//       "besh ",
//       "olti ",
//       "yeti ",
//       "sakiz ",
//       "tokiz ",
//    ],
//    [
//       "",
//       "ong ",
//       "yigirma ",
//       "otiz ",
//       "kirik ",
//       "ellik ",
//       "otmush ",
//       "yetmush ",
//       "sakson ",
//       "tokson ",
//    ],
//    "yuz ",
//    "ming ",
//    "onming",
//    "yuzming",
//    "milion ",
// ];

// const numName = (num) => {
//    num = num.toString().split("");
//    numIndex = num.length;
//    let str = "";
//    firstLoop: for (let i = 0; i < numIndex; i++, num.shift()) {
//       if (numIndex === 1 && num == 0) {
//          str = numNameArr[0];
//          break;
//       }
//       if (num[0] == 0 && num.length != 4) continue;
//       const one = (a = 0) => numNameArr[1][num[a]];
//       const two = (a = 1) => numNameArr[2][num[0]] + one(a);
//       switch (num.length) {
//          case 1:
//             str += one();
//             break;
//          case 2:
//             str += two();
//             break firstLoop;
//          case 3:
//          case 6:
//             str += one() + numNameArr[3];
//             break;
//          case 4:
//             str += one() + numNameArr[4];
//             break;
//          case 5:
//             str += numNameArr[2][num[0]];
//             break;
//       }
//    }
//    console.log(str);
// };

// numName(480000);

// let obj = {};

// let numNameObj = {
//    1: "bir",
//    2: "iki",
//    3: "uch",
//    4: "tor",
//    5: "besh",
//    6: "olti",
//    7: "yeti",
//    8: "sakiz",
//    9: "tokiz",
//    10: "ong",
//    20: "yigirma",
//    30: "otiz",
//    40: "kirik",
//    50: "ellik",
//    60: "otmush",
//    70: "yetmush",
//    80: "sakson",
//    90: "tokson",
//    100: "yuz",
//    1000: "ming",
//    1_000_000: "milion",
// };

