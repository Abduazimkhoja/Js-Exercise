element = document.querySelector(".element");
ball = document.querySelector(".ball");

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
// let dragging;
// element.addEventListener("mousedown", (e) => {
//    dragging = true;

//    const style = window.getComputedStyle(element);

//    const translateX = parseInt(style.getPropertyValue("--x"));
//    const translateY = parseInt(style.getPropertyValue("--y"));

//    startX = e.pageX - translateX;
//    startY = e.pageY - translateY;

// });

// document.body.addEventListener("mousemove", (e) => {
//    if (!dragging) return;
//    element.style.setProperty("--x", `${e.pageX - startX}px`);
//    element.style.setProperty("--y", `${e.pageY - startY}px`);
// });

const kick = (event) => {
   let { offsetX, offsetY } = event;
   let increaseX = 0;
   let increaseY = 0;
   setInterval(() => {
      if (offsetX > 15 && offsetY == 0) {
         increaseX += offsetX;
      } else if (offsetX == 0 && offsetY > 15) {
         increaseY += offsetY;
      } else if (offsetX < 30 && offsetY == 0) {
         increaseX -= offsetX;
      } else if (offsetX == 0 && offsetY < 30) {
         increaseY -= offsetY;
      } else if (offsetX < 16 && offsetY < 16) {
         increaseX += offsetX;
         increaseY += offsetY;
      } else if (offsetX > 15 && offsetY < 16) {
         increaseX -= offsetX;
         increaseY += offsetY;
      } else if (offsetX < 16 && offsetY > 15) {
         increaseX += offsetX;
         increaseY -= offsetY;
      } else if (offsetX > 15 && offsetY > 15) {
         increaseX -= offsetX;
         increaseY -= offsetY;
      }
      ball.style.setProperty("--x", `${increaseX}px`);
      ball.style.setProperty("--y", `${increaseY}px`);
   }, 100);
   console.log(increaseX, increaseY);
};

// ball.style.setProperty("--x", `${offsetX}px`);
// ball.style.setProperty("--y", `${offsetY}px`);
