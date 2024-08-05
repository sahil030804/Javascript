let score = 400;
// console.log(score)

let score2 = new Number(400.855566);
// console.log(score2);

// console.log(score2.toString().length); //10

// console.log(score2.toFixed(2)); //400.86

let score3 = new Number(123.534);

// console.log(score3.toPrecision(4)); //123.5

let digits = 19043002;
// console.log(digits.toLocaleString('en-IN')); //1,90,43,002

// ----------------  MATHS  -------------------

// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.sqrt(625))
// console.log(Math.min(625,4,10,3))
// console.log(Math.max(625,4,10,3))

console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.random()*(20-10+1));
