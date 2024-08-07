// const arr = [0,1,2,3,4,5];

// for (const val of arr) {
//     console.log(`value is : ${val}`);

// }
// const arr1 = ["batman", "superman", "flash"];

// for (const val of arr1) {
//     console.log(`value is : ${val}`);

// }
const greeting = "hello world";

for (const val of greeting) {
  if (val == " ") {
    continue;
  }
  // console.log(`character is : ${val}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("UAE", "United Arab Emirates");
map.set("UAE", "United Arab Emirates");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, "-", value);
}

// const myObj = {
//   1: "one",
//   2: "two",
// };

// console.log(myObj);

// for (const [key, value] of myObj) {
//   console.log(key);
// }

// for (const [key] in myObj) {
//   console.log(myObj[key]);

// }

let myarr = ["one", "two", "three"];

for (const key in myarr) {
  //    console.log(myarr[key]);
}

for (const [key, value] in map) {
  //   console.log(key
}

// myarr.forEach(function name(val) {
//   console.log(val);
// });

function easy(val, index, arr) {
  // console.log(val, index, arr);
}

myarr.forEach(easy);

const myObj = [
  {
    languagename: "java1",
    languagefilename: "java2",
  },
  {
    languagename: "python1",
    languagefilename: "python2",
  },
  {
    languagename: "php1",
    languagefilename: "php2",
  },
];

myObj.forEach((item) => {
  console.log(`value is : ${item.languagename}`);
});
