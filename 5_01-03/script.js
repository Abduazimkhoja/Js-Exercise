// lesson - 5 Objects Basics - 1

// ## HomeWork-1 📚 /////////////////////////////////////
let user = {
   name: "john",
   surname: "smith",
   // name: 'pete'
};

let keyname = "pete";
user.name = "pete";
user.name = keyname;
delete user.name;
console.log(user);

// ## HomeWork-2 📚 /////////////////////////////////////
let sch = {};
const isEmpty = (a) => {
   for (i in sch) {
      return false;
   }
   return true;
};
console.log(isEmpty(sch));

// // ## HomeWork-3 📚 ///////////////////////////////////// ???
// let num = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
// };

// let raise;
// let len = Object.keys(num).length;
// for (let i = 0; i < len; i++)  {
//    for(j in num) {
//       if (raise == undefined) {
//          raise = {}
//          raise[j] = num[j]
//          console.log(raise);
//       }
//       console.log(Object.values(raise) > num[j]);
//       console.log(num[j]);
//       console.log(Object.values(raise));

//       if (Object.values(raise) < num[j]) {
//          // raise[j] = num[j];
//          Object.assign(raise, num)
//       }
//    }
//    Object.assign(num, raise);
// console.log(num);
// }

// ## HomeWork-4 📚 /////////////////////////////////////
let menu = {
   width: 200,
   height: 300,
   title: "My menu",
};

for (i in menu)
   typeof menu[i] === typeof 1 ? (menu[i] = menu[i] * 2) : (menu[i] = menu[i]);
console.log(menu);

//    ///////////////// OBJECT /////////////////
console.log("\n============= OBJECT ================\n");
// No1
console.log("\n№1 ---------");
// object keylarini toping
let obj1 = {
   id: 1,
   name: "WebBrain",
};
console.log(Object.keys(obj1));
for (i in obj1) {
   console.log(i);
}
// chiqish
// id,name


// no2
console.log("\n№2 ---------");
// object valuelarining raqamga tenglarini toping
let obj2 = {
   id: 1,
   name: "WebBrain",
};
for (i in obj2) {
   typeof obj2[i] === typeof 1 ? console.log(i) : "";
}
// chiqish
// id


// No3
console.log("\n№3 ---------");
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
let obj3 = {
   id: 1,
   name: "WebBrain",
   offline: true,
   online: true,
   individual: false,
};
for (i in obj3) {
   typeof obj3[i] !== typeof true ? delete obj3[i] : ""
}
console.log(obj3);
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }


// No4
console.log("\n№4 ---------");
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
let obj4 = {
   id: 1,
   name: "WebBrain",
   offline: true,
   online: true,
   individual: false,
};
function Search(obj, str) {
   for (i in obj4) {
      obj4[i] === str ? console.log(`${i}: "${obj4[i]}"`) : ""
   }
}
Search(obj4, "WebBrain");
// chiqish;
// name: "WebBrain";


// No5
console.log("\n№5 ---------");
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
let obj5 = {
   id: 1,
   name: "atirgul",
   color: "qizil",
   count: 10,
   price: "10$",
};
const searchValue = (obj, str) => {
   for (i in obj) {
      typeof obj5[i] === typeof str ? console.log(obj5[i]) : ""
   }
}
searchValue(obj5,'i')
// chiqish:
// atirgul,qizil;


// No6
console.log("\n№6 ---------");
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
let person = {
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
// chiqish
// 146
