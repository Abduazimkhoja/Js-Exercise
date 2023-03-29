//lesson 11 array 3/3 CRUD
// 4 отнять самые большие цифры
// let arr = [2,3,2,4,5,2,3]
// [2,3,2,4,5,2,3]
// [2,3,2,1,2,3]
// [2,3,2,2,2]
// [1,2,2,2]
// [1,2,2]
// [1,1]
// [0]

// let arr = [1, 3, 2, 8, 5, 2, 3, 5];
// while (arr.length > 1) {
//    arr.sort((a, b) => b - a);
//    if (arr[0] - arr[1] != 0)  arr[1] = arr[0] - arr[1]
//    else if (arr.length == 1) (arr = [0])
//    arr.shift();
//    console.log(arr);
// }

// 5 link https://t.me/webbrain_academy/53
// const findLength = (n) => {
//    let bin = n.toString(2)
//    console.log(bin);
//    let col = 0,res = 0;
//    for (let i = 0; i < bin.length -1; i++) {
//       if (bin[i] == 1 && bin[+i+1] == 0) {
//         col = 0
//          for (let j=i+1; bin[j] != 1; j++) {
//             col++
//             if (bin[j] != 0 && bin[j] != 1) {
//                col = 0
//                break
//             }
//          }
//       }
//       if (res < col) {
//         res = col
//       }
//    }
//    console.log(res);
// }
// findLength(5403)

// 6 link https://t.me/webbrain_academy/60 ❓❓
// const test = (arr, n) => {
//    let sum = 0
//    arr.push(" ")
//    arr.reduce((s,v)=> {
//       s%n == 0 ? sum++:0
//       console.log(s, v, sum);
//       return s+v
//    }, 0)
//    console.log(sum);
// }
// test([2,1,3], 2)

// String
// 1
// let str = "Webbrain Academy";
// let big = 0,
//    small = 0;
// for (i of str) {
//    i.toUpperCase() == i && i != " " ? big++ : i != " " ? small++ : null;
// }
// console.log(`${big} katta harf, ${small} kichik harf`);

// 2
// let str = "Webbr@in Ac@demy",res="";
// for (i of str) i == "@" ? res += "a" : res += i
// console.log(res);

// 3
// let str = "Webbbraiiin Acaaadeemyy",res = "";
// for (i in str)  str[i] != str[+i+1] ? res += str[i] : null
// console.log(res);

// 4
// let str = "Webb45rai5n Acade54my",res="";
// for (i of str) isFinite(i) && i != " " ? res += i:null
// console.log(res);

// 5
// let str = "Webbrain",res = "";
// for (i of str) res += i+i
// console.log(res);

// 6
// let str = "non"
// console.log(str == [...str].reverse().join(""))

// 7
// let str1 = "web", str2 = "ewb";
// str1 = [...str1].sort((a,b) => a.localeCompare(b)).join("");
// str2 = [...str2].sort((a,b) => a.localeCompare(b)).join("");
// console.log(str1 === str2);

// 8
// let str = "Webbrain Academy",res ={};
// str = str.toLowerCase()
// for (i of str) {
//    i in res ? res[i]++: i !== " " ? res[i] = 1: null
// }
// console.log(res);

// 9 ❓❓
// let str = "Webbrain Academy", res = "";
// let sum = 0;
// for (i in str) {
//    sum = 0
//    // if (str[i-1] == str[i]) {
//    //    sum++
//    // }
// }
// console.log(sum);

// ARRAY
// 1
// let num = [2,3,5,3,2,3,6,8,7,6];
// const removeDublicate = (arr) => arr.filter((v,i) => arr.indexOf(v) == i)
// console.log(removeDublicate(num));

// 2
// let n1 = [1,2,3];
// let n2 = [1,2,3];
// console.log(n1.every((v,i) => v === n2[i]));
// console.log(n1.join("").localeCompare(n2.join("")) === 0);
// console.log(n1.join("") === n2.join(""));

// 3
// let arr = [1,32,4,64,97,423];
// console.log(arr.filter(v => `${v}`.length === 2 ));

// Object
// 1
// let obj = {title: "web", age: 12}
// console.log(Object.keys(obj));

// 2
// let obj = {
//    name: "w",
//    age: 1,
//    child: {
//       age:3,
//       id:4,
//       child: {
//          age:5,
//          year: 2000,
//       }
//    }
// }
// let sum = 0
// while(obj) {
//    sum+= obj.age
//    obj = obj.child
// }
// console.log(sum);

// 3
// let obj = {
//    id: 1,
//    name: "web",
//    of: false,
//    on: true,
//    ind: true
// }

// for (i in obj) typeof obj[i] == 'boolean' ? console.log(`${i}: ${obj[i]}`) :0
