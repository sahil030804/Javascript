function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("abcd", "abc@gmail.com", "123456");
console.log(chai);

// let users = ["one", "two"];

// function addUser(user) {
//   users.push(user);
// }

// // addUser("sahil");
// // addUser("three");

// console.log(users);
