
element = document.querySelector(".element");

// circle.onmousedown = function (e) {
//    const style = window.getComputedStyle(circle)

//   // Считываем значение каждой переменной через getPropertyValue:
//   const translateX = parseInt(style.getPropertyValue('--x'))
//   const translateY = parseInt(style.getPropertyValue('--y'))

//   // Дальше всё остаётся по-старому :–)
//   startX = e.pageX - translateX
//   startY = e.pageY - translateY

//    circle.style.setProperty("--x", `${e.pageX - startX}px`)
//    circle.style.setProperty("--y", `${-e.pageY - startY}px`)
// };

// ...
let dragging;
element.addEventListener("mousedown", (e) => {
   dragging = true;

   const style = window.getComputedStyle(element);

   const translateX = parseInt(style.getPropertyValue("--x"));
   const translateY = parseInt(style.getPropertyValue("--y"));

   startX = e.pageX - translateX;
   startY = e.pageY - translateY;
});

document.body.addEventListener("mousemove", (e) => {
   if (!dragging) return;
   element.style.setProperty("--x", `${e.pageX - startX}px`);
   element.style.setProperty("--y", `${e.pageY - startY}px`);
});
