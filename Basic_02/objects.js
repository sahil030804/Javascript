//object literals
const mySym = Symbol("key1")
const User = {
  name: "sahil",
  full_name: "sahil ranpariya",
  [mySym]:"mykey1",
  age: 20,
};

// console.log(User.name);
// console.log(User["name"]);
// console.log(User["full_name"]);
// console.log(typeof User[mySym]);


User.name = "sahil"
// Object.freeze(User)
// User.name="sahil ranpariya"
// console.log(User);


User.greeting = function(){
    console.log("Hello User");
    
}

User.greeting2 = function(){
    console.log(`Hello User,${this.full_name}`);
    
}

console.log(User.greeting());
console.log(User.greeting2());
