function muliply5(num) {
  return num * 5;
}
muliply5.power = 2;
console.log(muliply5(5));
console.log(muliply5.power);
console.log(muliply5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price  is ${this.score} `);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

console.log(chai);
console.log(tea);

chai.printMe();
tea.printMe();
