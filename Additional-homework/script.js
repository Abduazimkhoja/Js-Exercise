// #    /////////////////object/////////////////
// No1
// object keylarini toping
let obj1 = {
   id: 1,
   name: "WebBrain",
};
console.log(Object.keys(obj1));
for (i in obj1) console.log(i);

// chiqish
// id,name

// no2
// object valuelarining raqamga tenglarini toping
let obj2 = {
   id: 1,
   name: "WebBrain",
};
for (i in obj2) typeof obj2[i] === "number" ? console.log(i) : NaN;
// chiqish
// id
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
let obj3 = {
   id: 1,
   name: "WebBrain",
   offline: true,
   online: true,
   individual: false,
};
for (i in obj3)
   typeof obj3[i] === "boolean" ? console.log(`${i}: ${obj3[i]}`) : undefined;
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
let obj4 = {
   id: 1,
   name: "WebBrain",
   offline: true,
   online: true,
   individual: false,
};
function Search(obj, str) {
   for (i in obj) obj[i] == str ? console.log(`${i}: ${str}`) : undefined;
}
Search(obj4, "WebBrain");
// chiqish
//     name:"WebBrain"
// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
let obj5 = {
   id: 1,
   name: "atirgul",
   color: "qizil",
   count: 10,
   price: "10$",
};
const searchValue = (obj, str) => {
   for (i in obj)
      typeof obj[i] === "string" && obj[i].includes(str)
         ? console.log(obj[i])
         : undefined;
};
searchValue(obj5, "i");
// chiqish
// atirgul,qizil

// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
let person6 = {
   id: 1,
   name: "Odil",
   age: 78,
   child: {
      id: 1,
      name: "Ali",
      age: 48,
      child: {
         id: 1,
         name: "Umar",
         age: 20,
      },
   },
};

let sum = 0;
while (person6) {
   sum += person6.age;
   person6 = person6.child;
}
console.log(sum);
// chiqish
// 146

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
let user = {
   id: 1,
   name: "Odil",
   age: 78,
   children: [
      {
         id: 1,
         name: "Umar",
         age: 54,
         children: [
            { id: 1, name: "Asmo", age: 34 },
            { id: 2, name: "Osim", age: 30 },
            { id: 3, name: "Xattob", age: 25 },
         ],
      },
      { id: 2, name: "Umar", age: 54 },
      { id: 3, name: "Umar", age: 54 },
   ],
};
// while(user) {
//    for (i in user) {
//       if (i == "age" && user[i] > 18) {
//          console.log(i.age);
//          user = user.children;
//       }
//    }
// }

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
let arr8 = [
   { id: 1, name: "Usmon", job: "developer" },
   { id: 2, name: "Usmon", job: "developer" },
   { id: 3, name: "Usmon" },
   { id: 4, name: "Usmon", job: "developer" },
   { id: 5, name: "Usmon" },
];
for (i of arr8) {
   if ("job" in i) {
      console.log("№8", i);
   }
}
// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
let obj9 = {
   id: 1,
   name: "Usmon",
   job: "developer",
};
let coloneObj = structuredClone(obj9);
console.log("№9", coloneObj);
// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
let obj10 = {};
const add = (obj, key, value) => {
   obj[key] = value;
};
add(obj10, "address", "toshkent");
console.log(obj10);
// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
let obj11 = {
   id: 1,
   name: "Usmon",
   job: "developer",
   practice: 1,
};
obj11.practice > 1
   ? console.log("№11 qabul qilindi")
   : console.log("№11 ming bor uzur.");
// chiqish
// qabul qilindi
// No12
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
let obj12 = {
   id: 1,
   name: "Usmon",
   job: "developer",
   practice: 1,
   talaba: true,
};
obj12.talaba === true ? (obj12.kredit = true) : (obj12.kredit = "olinmadi");
console.log("№12", obj12);
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
let obj13 = {
   id: 1,
   name: "Usmon",
   age: 34,
   year: 1990,
};
obj13.age == 2023 - obj13.year
   ? console.log(true)
   : console.log("xato malumot kiritdingiz");
// chiqish
// 'xato malumot kiritdingiz'
// No14
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
let obj14 = {
   id: 1,
   name: "Usmon",
   age: 34,
   year: 1990,
   city: "Tashkent",
};
arr14 = ["andijon", "namangan", "qarshi", "toshkent"];
arr14.includes(obj14.city.toLowerCase())
   ? console.log(true)
   : console.log("bizning filallarimiz faqat shu viloyatlarda", arr14);
// No15
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
let arr15 = [
   { id: 3, name: "Usmon", parol: "1231" },
   { id: 1, name: "Umar", parol: "1241" },
   { id: 5, name: "Jasur", parol: "3452" },
   { id: 2, name: "Asmo", parol: "2312" },
   { id: 4, name: "Salohiddin", parol: "3421" },
];
const logIn = (name, password) => {
   // for (i of arr15) {
   // i.name === name && i.parol === password ? console.log("hush kelibsiz") : console.log('login yoki parol xato');
   arr15.some((item) => {
      return item.name === name && item.parol === password;
   })
      ? console.log("hush kelibsiz")
      : console.log("login yoki parol xato");
   // }
};
logIn("Umar", "2113"); // xato
logIn("Salohiddin", "3421"); // hush kelibsiz

// No16
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
obj16 = {
   id: 1,
   address: { street: "Farobiy", number: "34" },
   title: "the best",
};

for (i in obj16) {
   var res = typeof obj16[i] === "object"
   if (res == true) break
}res
   ? console.log(true)
   : console.log(false);


// chiqish
// true

// No17
let person17 = {
    id: 1,
    name: 'Umar',
    surname: 'Ismoilov',
}
person17.ielts = 5.5;
person17.ielts == 5.5 ? console.log("qabul qilindi"): console.log("qayta topshirish kk");
person17.ielts >= 5.5 ? person17.student = true: undefined
person17.student == true ? person17.parol = parseInt(Math.random()*100)+person17.id: undefined
console.log(person17);
// // add IELTS
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // qabul qilindi
// 3 - shart
// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // qoshimcha
// 4 - shart
// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol,name){}

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato

let study = [
	{id: 1, year: 2002, name: "FIO1"},
	{id: 2, year: 2001, name: "FIO2"},
	{id: 3, year: 2005, name: "FIO3"},
	{id: 4, year: 2002, name: "FIO4"}
]

console.log(study);

