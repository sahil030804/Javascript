class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new couse was added by ${this.username}`);
  }
}

const tea = new user("chai");
const chai = new teacher("abc", "chai@gmail.com", "12345");
tea.logMe();
chai.addCourse();


