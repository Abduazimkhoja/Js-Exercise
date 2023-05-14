let brush = 0;
let totalImg = document.getElementsByTagName("img");
let container = document.getElementsByClassName("container");
let slide = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dots");
let dot = document.getElementsByClassName("dot");

for (let i = 0; i != Math.trunc(slide.length / 3); i++) {
   let dot = document.createElement("span");
   dot.classList.add("dot");
   // dot.setAttribute("onclick", "dotNavigate(event)")
   dots[0].append(dot);
}


dot[0].classList.add("dot-active");
const slideRight = () => {
   dot[brush / 700].classList.remove("dot-active");
   !dot[brush / 700 + 1]
      ? dot[0].classList.add("dot-active")
      : dot[brush / 700 + 1].classList.add("dot-active");

   if (brush >= Math.trunc(slide.length / 3) * 700) brush = -700;
   container[0].style.left = `-${(brush += 700)}px`;
};
const slideLeft = () => {
   dot[brush / 700].classList.remove("dot-active");
   !dot[brush / 700 - 1]
      ? dot[Math.trunc(slide.length / 3 - 1)].classList.add("dot-active")
      : dot[brush / 700 - 1].classList.add("dot-active");
   // console.log(slide.length/3*700);
   if (brush <= 0) brush = Math.trunc(slide.length / 3) * 700;
   container[0].style.left = `-${(brush -= 700)}px`;
};

dots[0].onmousedown = (event) => {
   for (i of dot) {
      if (i.classList.contains("dot-active")) {
         i.classList.remove("dot-active")
      }
   }
   let childIndex = Array.prototype.indexOf.call(dot, event.target)
   container[0].style.left = `-${childIndex*700}px`;
   if (event.target == dot[childIndex]) {event.toElement.classList.add("dot-active");}  
}



// 1 навигация с помоши точек 
// 2 изменить цвет точки соответсвуюшей позиции 
// 3 создать сколько нужно точек 
// 4 aвто слайд. при наведении останавливать слайд 
