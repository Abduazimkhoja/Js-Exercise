// getter, setter, prototype
let obj = {
   name: "web",
   title: "academy",
};

// Object.prototype.remove = function(key) {
//    delete obj[key]
// }
Object.prototype.seted = function (flag, key, stats) {
   Object.defineProperty(this, `${key}`, { [flag]: stats });
};
// obj.remove("title")
obj.seted("enumerable", "name", false);
// obj.name = "hello"
// Object.defineProperty(obj, "name", {writable: false})

let descriptor = Object.getOwnPropertyDescriptors(obj);
console.log(descriptor);


