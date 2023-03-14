// lesson 8 String

// 1
console.log("1⇩");
const check = (str1, str2) => {
   if (str1.includes(str2) && str2 != "") {
      str1.localeCompare() == 0
         ? console.log("Идентичный")
         : console.log("частично");
   } else {
      console.log("Не соответсвует");
   }
};
check("webbrain", "bb");

// 2
console.log("2⇩");
const getCount = (str) => {
   let shelves = {};
   for (i of str) {
      i in shelves ? shelves[i]++ : (shelves[i] = 1);
   }
   console.log(shelves);
};
getCount("webbrain");

// 3
console.log("3⇩");
const trancate = (str, n = str.length, from = 0) => {
   console.log(str.slice(from, n));
};
trancate("webbrain academy", 5);

// 4
console.log("4⇩");
const getCurrency = (str) => {
   let shelves = "";
   for (i of str) {
      if (isFinite(i)) {
         shelves += i;
      }
      // console.log((i.match(/[a-z]/i))); ?????
   }
   console.log(shelves);
};
getCurrency("$1200");

// 5
console.log("5⇩");
const getSortString = (str) => {
   let sort = { letter: 0, char: 0, num: 0, length: str.length };
   for (i of str) {
      let bynery = i.charCodeAt(0);
      if (isFinite(i)) {
         sort.num++;
         // } else if ((bynery >= 65 && bynery <= 90) || (bynery >= 97 && bynery <= 122)) {
      } else if (i.match(/[a-z]/i)) {
         sort.letter++;
      } else {
         sort.char++;
      }
   }
   console.log(sort);
};
getSortString("webbr@!n_2023be098v25= epaok'ew;l,AAAA");

// 6
console.log("6⇩");
const textCapitalize = (str) => {
   let cap = "";
   for (i in str) {
      i == 0 || str[i - 1] == " "
         ? cap += str[i].toUpperCase()
         :cap += str[i].toLowerCase();
   }
   console.log(cap);
};

textCapitalize("webbrain academy"); //Webbrain Academy
