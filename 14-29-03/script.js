// lesson 14 scope, closure, old var, IIFE, Global obj, function obj, setTimeout и setInterval
let res = 0;
function sum(b) {
   res += b;
   return sum; // <-- does not call itself, returns itself
}
sum(1)(2);
console.log(res);