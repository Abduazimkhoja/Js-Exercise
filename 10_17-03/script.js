//lesson 10 array 2/3 filter,sort,map,reduce,forEach,flat,find,every,some,fill,copyWithin,next,new Map.

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