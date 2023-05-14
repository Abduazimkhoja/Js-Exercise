let button = document.querySelector(".button");

const dropdown = () => {
   button.classList.contains("button-open")
      ? button.classList.remove("button-open")
      : button.classList.add("button-open");
};
