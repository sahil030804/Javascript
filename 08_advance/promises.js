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

//////////////////////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "sahil", password: "12345" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected");
  });

////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
