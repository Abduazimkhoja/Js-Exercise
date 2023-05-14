
title.oncopy = () => false

const defaultText = inputText.textContent;
const press = (event) => {
   inputText.innerHTML = `${defaultText} ${event.target.value}`;
};

box.onscroll = (event) => {
   if (
      event.target.scrollTop + event.target.clientHeight + 50 >
      event.target.scrollHeight
   ) {
      box.textContent += box.textContent;
   }
};
