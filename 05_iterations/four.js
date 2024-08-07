const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = myArr.filter((item) => {
//   return item > 4;
// });

const newArr = [];

myArr.forEach((item) => {
  if (item >= 5) {
    newArr.push(item);
  }
});

console.log(newArr);
