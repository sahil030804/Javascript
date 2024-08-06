function sayMyname() {
  console.log("S");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("L");
}

// sayMyname();

function AddNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;

  return num1 + num2;
}

// AddNumbers(3, 4);
let result = AddNumbers(10, 10);
// console.log(result);

function loginUserMessage(userame = "unknown") {
  if (userame === undefined) {
    // console.log("please enter usename");
    return;
  }
  return `${userame} jut logged in `;
}
let message = loginUserMessage("sahil");
// console.log(message);

function CalculateCartPrice(...num) {
  return num;
}

// console.log(CalculateCartPrice(100, 200, 300, 400));

const product = {
  name: "keyboard",
  price: 500,
};

function handleObject(anyobject) {
  console.log(`product is ${anyobject.name} and price is ${anyobject.price}`);
}

// console.log(handleObject(product));  // object already made

// console.log(
//   handleObject({
//     name: "abc",
//     price: 100,
//   })
// );                                   //object made on print time

const myNewArray = [100, 200, 300];

function returnArray(anyarray) {
  return anyarray[2];
}

// console.log(returnArray(myNewArray));                  //array already made 
// console.log(returnArray([100, 200, 4000, 3000]));      //array made on call time 
