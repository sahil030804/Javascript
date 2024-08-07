const myNum = [1, 2, 3, 4, 5, 6, 7, 8];

// for (const num of myNum) {
//   let add = num + 10;
//   console.log(add);
// }

// const newNums= myNum.map( (num) => num + 10 )

let newNums1 = myNum
  .map((num) => num * 2)
  .map((num) => num + 1)
  .filter((num) => num >= 10);

console.log(newNums1);
