//  lesson - 6 Object | Objects - 2

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
let arr = [
   { id: 1, name: "Usmon", job: "developer" },
   { id: 2, name: "Usmon", job: "developer" },
   { id: 3, name: "Usmon" },
   { id: 4, name: "Usmon", job: "developer" },
   { id: 5, name: "Usmon" },
];

// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
let obj1 = {
   id: 1,
   name: "Usmon",
   job: "developer",
};
let cloneObj = structuredClone(obj1);
console.log("№9", cloneObj);

// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
let obj2 = {};
const getObject = (obj, key, value) => {
   obj[key] = value;
};
getObject(obj2, "address", "toshkent");
console.log("№10", obj2);

// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
let obj3 = {
   id: 1,
   name: "Usmon",
   job: "developer",
   practice: 1,
};
if (obj3.practice == 1) console.log("№11 qabul qilindi");
else console.log("№11 ming bor uzur.");

// chiqish
// qabul qilindi

// No12
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
let obj4 = {
   id: 1,
   name: "Usmon",
   job: "developer",
   practice: 1,
   talaba: true,
};
if ("talaba" in obj4) {
   obj4.kredit = true;
} else {
   obj4.kredit = olinmadi;
}
console.log("№12", obj4);

// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }

// No13
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
let obj5 = {
   id: 1,
   name: "Usmon",
   age: 34,
   year: 1990,
};
if (2023 - obj5.year != obj5.age) {
   console.log("№13 xato malumot kiritdingiz");
}
// chiqish
// 'xato malumot kiritdingiz'

// 1
function makeUser() {
   return {
      name: "john",
      ref: this,
   };
}

let user = makeUser();
console.log("1 ", user.ref.name); //пустая строка. когда this призодит 1 он принимает значение глобальногоо обьекта window. В window есть indicator name: "". мы ссылаемя на этот код

// 2
let calculator = {
   read (a, b) {
      this.a = a;
      this.b = b;
   },
   sum () {
      return this.a + this.b
   },
   mul () {
      return this.a * this.b
   }
};

calculator.read(10, 5);
console.log("2", calculator.sum());
console.log("2", calculator.mul());


// 3
let ladder = {
   step: 0,
   up() {
      this.step++;
      return this
   },
   down() {
      this.step--;
      return this
   },
   showStep: function() {
      console.log(this.step);
      return this
   }
}

// ladder.up()
// ladder.up()
// ladder.down()
// ladder.showStep() // 1
// ladder.down()
// ladder.showStep() // 0

ladder.up().up().down().showStep().down().showStep();

