let name = "sahil";
let birthdate = "03/08/2004";

// console.log(`hello my name is ${name} and my birthdate is ${birthdate}`);

let GameName = new String("sahil-ranpariya-sureshbhai");
console.log(GameName[0]);
console.log(GameName.__proto__);
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf("s"));

// let newString = GameName.substring(0,4)

// console.log(newString);

let anotherString = GameName.slice(-3, 4);

// console.log(anotherString);

let newString = "    hello iooweno wefwefnwe";
console.log(newString);
console.log(newString.trim());

let url = "http://google.com/sahil%20javascript";
console.log(url.replace("%20", " "));
console.log(url.includes("sahil")); //true

console.log(GameName.split('-')[0]); //sahil
