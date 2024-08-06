const user = {
  name: "sahil",
  price: 499,
  welcomemessage: function () {
    console.log(`${this.name} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomemessage();

// user.name = "abcdef";
// user.welcomemessage();
// console.log(this);

// function chai() {
//   let username = "sahil";
//   console.log(this);
// }

// chai();

// const chai = function () {
//   let username = "sahil";
//   console.log(this.username);
// };

const chai = () => {
  let username = "sahil";
  console.log(this);
};

// chai();

// const add = (num1, num2) => {
//   return num1 + num2;
// };                                      //explicit return

// const addone = (num1, num2) => num1 + num2;     //implicit return

const addone = (num1, num2) => ({
  username: "sahil",
});                                              //return object in paranthisis ()

console.log(addone(3, 9));



// () => {return require}
// () => ( return not inquire )
