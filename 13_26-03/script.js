// lesson 15 recursion

// 1) factorial
let res = 1;
const factorial = function inner(n) {
   if (n === 1) return res;
   else {
      res *= n;
      return inner(n - 1);
   }
};
console.log(factorial(5));

// 2)Fibonacci numbers
let sum = 0,
   a = 0,
   b = 1;
const fib = function inner(n) {
   if (n === 1) return sum;
   else {
      sum = a + b;
      a = b;
      b = sum;
      return inner(n - 1);
   }
};
console.log(fib(77));
