const math1 = (type, ...num) => {
   let obj = {
      add: num.reduce((a,b) => a+b),
      divide: num.reduce((a,b) => a/b),
      multiply: num.reduce((a,b) => a*b),
   };
   console.log(obj[type]);
}

math1("multiply", 1,2,3,4)

