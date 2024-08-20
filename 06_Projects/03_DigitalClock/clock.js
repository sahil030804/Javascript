const clock = document.querySelector(".time");

setInterval(function () {
  let date = new Date();
//   let options = { timeZone: "America/New_York" };
  //   console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
