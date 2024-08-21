class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is : ${this.username}`);
  }

  createId() {
    return `123`;
  }
}

const hitesh = new user("sahil");

console.log(hitesh.createId());

class teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new teacher("iphone", "1phone @ gmail");

iphone.logMe();
console.log(iphone.createId());
