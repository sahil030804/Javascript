// const tinderUser=new Object()
const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "sahil";
tinderUser.isLoggdIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "hello@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sahil",
      lastname: "ranpariya",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = {
  5: "a",
  6: "b",
};

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = { ...obj1, ...obj2 }; //merge 2 objects
// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));

const course = {
  coursename: "javascript",
  price: 999,
  courseInstructor: "ChaiAurCode",
};

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);
