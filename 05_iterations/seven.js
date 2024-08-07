// let cart = [1, 2, 3, 4, 5, 6];

// let result = cart.reduce(function (acc, curval) {
//   console.log(`acc value : ${acc} and current value : ${curval}`);
//   return acc + curval;
// }, (acc = 0));

// =====================================================


// let result = cart.reduce(
//   (acc, curval) =>
//     //   console.log(`acc : ${acc} and curval : ${curval}`),
//     acc + curval,
//   (acc = 0)
// );

// console.log(result);

// ======================================================

const shoppingCart = [
  {
    itemname: "js course",
    price: 1299,
  },
  {
    itemname: "python course",
    price: 2399,
  },
  {
    itemname: "web dev course",
    price: 2999,
  },
  {
    itemname: "android course",
    price: 1000,
  },
  {
    itemname: "mobile course",
    price: 10000,
  },
];

let priceToPay = shoppingCart.reduce(
  (acc, item) => acc + item.price,
  (acc = 0) //accumlator = starting
);

console.log(priceToPay);
