// let myName = "Sahil     ";

// console.log(myName.trueLength);

let heroes = ["hulk", "spiderman"];

let heroPower = {
  hero: "spiderman",
  powerName: "sling",
};

Object.prototype.power = function () {
  console.log(`power is peter tingle`);
};

Array.prototype.power2 = function () {
  console.log(`power is peter tingle 2`);
};

// heroPower.power();
// heroes.power();
// heroPower.power2();
// heroes.power2();
const User = {
  name: "chai",
  email: "abc@gmail.com",
};
const Teacher = {
  makeVideos: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS",
  fullTime: true,
  __proto__: TeachingSupport,
};

// console.log(TASupport);

Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode          ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();

"sahil".trueLength();
"sahfnsdvbsdbckSil".trueLength();
