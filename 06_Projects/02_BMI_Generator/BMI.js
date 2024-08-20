const form = document.querySelector("form");

// this usecase give empty value

// const height = parseInt(document.querySelector("#height").value);
// console.log(height);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  // console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
    // console.log(weight);

  const result = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter valid height : ${height}`;
  }
  //   result.innerHTML = `please enter valid height : ${height}`;
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid weight : ${weight}`;
  }
  //   result.innerHTML = `please enter valid weight : ${weight}`;
  else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>`;

    // console.log(BMI);

    // if (BMI < 18.6) {
    //   message.innerHTML = "<span>Under Weight</span>";
    // } else if (BMI > 18.6 && BMI < 24.9) {
    //   message.innerHTML = "<span>normal Weight</span>";
    // } else if (BMI > 24.9) {
    //   message.innerHTML = "<span>over Weight</span>";
    // }

    switch (true) {
      case (BMI < 18.6):
        message.innerHTML = "<span>Under Weight</span>";
        break;
      case BMI > 18.6 && BMI < 24.9:
        message.innerHTML = "<span>normal Weight</span>";
        break;
      case BMI > 24.9:
        message.innerHTML = "<span>Over Weight</span>";
        break;
      default:
        break;
      // }
    }
  }
  //   switch (true) {
  //     case height === "":
  //       result.innerHTML = "height can't be null";
  //       break;
  //     case height < 0:
  //       result.innerHTML = " height can't be less than 0";
  //       break;
  //     // case isNaN(height):
  //     //   result.innerHTML = " height can't be null";
  //     //   break;
  //     default:
  //       result.innerHTML = "";

  //       break;
  //   }
});
