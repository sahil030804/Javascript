// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase( )}`;
//   }
// }

// const chai = new user("chai", "abc@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.EncryptPassword = function () {
  return `${this.password}abc`;
};

user.prototype.changeUser = function () {
  return `${this.username.toUpperCase()}`;
};

const chai = new user("sahil", "abc@gmail.com", "123");

console.log(chai.EncryptPassword());
console.log(chai.changeUser());
