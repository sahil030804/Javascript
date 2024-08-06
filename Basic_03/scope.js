let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("inner :", a);
}

// console.log("outer :", a);
// console.log(b);
// console.log(c);


// -----------------------------------------------------------------------------


function addone(num) {
  return num + 1;
}

// console.log(addone(10));

let addtwo = function (num) {
    return num + 2;
};

// console.log(addtwo(2));



