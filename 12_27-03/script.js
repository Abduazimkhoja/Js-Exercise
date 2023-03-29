// lesson 12 DE structured, new Date(), JSON, momentjs
// momentjs.com
// Multiple Locale Support
const month = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

const week = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];

const moment = () => {
   return {
      format(a) {
         let date = new Date();
         let obj = {
            LT: `${date.getHours()}:${date.getMinutes()} PM`,
            LTS: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`,
            L: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
            l: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
            LL: `${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`,
            ll: `${month[date.getMonth() + 1].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`,
            LLL: `${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`,
            lll: `${month[date.getMonth() + 1].slice(0,3)} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`,
            LLLL: `${week[date.getDay()]}, ${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`,
            llll: `${week[date.getDay()].slice(0, 3)}, ${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`,
         };
         console.log(obj[a]);
      },
   };
};

moment().format("LLL");



// const getCalc = (company) => {
//    Object.keys(company)
// }

// getCalc(company)