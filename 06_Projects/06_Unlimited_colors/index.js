let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

console.log(randomColor());

let start;

const startChangingColor = function () {
  //

  let changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };

  if (!start) {
    start = setInterval(changeBgColor, 1000);
  }
  console.log(start);
};
const stopChangingColor = function () {
  //
  clearInterval(start);

  start = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
