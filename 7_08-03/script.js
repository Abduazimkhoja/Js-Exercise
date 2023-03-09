// lesson 7 Number
// 1
let num = 120, toNum = num.toString(2), a = 0, b = 0;
for (i in toNum) toNum[i] == 1 ? a++ : b++
console.log(`${a} bir, ${b} nol`)

// 2
let numMin = Math.min(1,6,7,2,5,7,5,2,4,6,7,-2,-20,-50,60,21,43,-84);
let numMax = Math.max(1,6,7,2,5,7,5,2,4,6,7,-2,-20,-50,60,21,43,-84);
console.log(numMax-numMin)

// 3
// ceil - округляет в большую сторону
// floor - округляет в меньшую сторону
// trunc - удаляет дробную часть
// parseInt - является методом. удаляет дробную часть 

// 4
const randInt = (min, max) => {
   console.log(parseInt((Math.random() * max) + min));
}
randInt(1, 50)