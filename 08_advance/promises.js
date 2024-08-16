const promiseOne = new Promise(function (resolve, reject) {
  //Db calls

  setTimeout(function () {
    console.log("promise 1 is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise 1 is resolved");
});

///////////////////////////////////////////////

new Promise(function (resolve, reject) {
  console.log("promise 2 ");
  resolve();
}).then(function () {
  console.log("task 2 is resolved");
});

///////////////////////////////////////////////

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "sahil", email: "sahilranpariya60@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
