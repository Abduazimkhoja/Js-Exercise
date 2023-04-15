// DOM2:Attributes,Creating/add element,add style,scroll
let colors = {
   1: "#A3D6AA",
   11: "#5FD8FF",
   21: "#F98CA5",
   31: "#FFF570",
   41: "#7DB3CB",
   51: "#FEB68F",
   61: "#D2ED83",
   71: "#FD86C7",
   81: "#FFDAC8",
   91: "#CAE7C9",
};

let sheets = document.createElement("table");
let bd = document.querySelector("body");

let btn = document.createElement("button");
bd.append(btn);
btn.innerText = "reset";
btn.setAttribute("onclick", "resetOld()");
btn.style.cssText = 
`
   display: inline-block;
   width: 427px;
   margin-top: 10px;
   padding: 15px 32px;
   border: none;
   border-radius: 10px;
   text-align: center;
   text-decoration: none;
   font-size: 16px;
   cursor: pointer;
   color: white;
   background-color: #4CAF50; /* Green */
`;

bd.prepend(sheets);
sheets.style.borderCollapse = "collapse";

for (let i = 1; i < 100; i++) {
   let a = i;
   if (i % 10 == 1) {
      let tr = document.createElement("tr");
      sheets.append(tr);
      tr.style.backgroundColor = colors[i];

      // tr.classList.add("th", i)
      for (let j = 1; j <= 10; ++j) {
         let th = document.createElement("th");
         tr.append(th);
         th.setAttribute("id", a);
         th.setAttribute("onclick", `star(${a})`);
         th.append(a++);
         th.style.cssText = `
            height: 40px;
            width: 40px;
            border: 1px solid #c3c3c3;
            color: #505050;
            cursor: pointer;
         `;
      }
   }
}

const star = (num) => {
   let arr = [];
   for (let i = 1; i <= 100; i++) {
      if (i % num == 0) arr.push(i);
   }
   arr.forEach((v) => {
      let getStar = document.getElementById(`${v}`);
      getStar.innerText = "*";
   });
};

const resetOld = () => {
   for (let i = 1; i <= 100; i++) {
      let getStar = document.getElementById(`${i}`);
      getStar.innerText = `${i}`;
   }
};
