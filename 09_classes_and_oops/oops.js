// const user = {
//   username: "sahil",
//   loginCount: 10,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("got user details from database");
//     console.log(`username : ${this.username}`);
//   },
// };

// console.log(user.loginCount);
// console.log(user.getUserDetails());

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = new user("sahil", 12, true);
const userTwo = new user("abc", 122, false);
console.log(userOne);
console.log(userTwo);
