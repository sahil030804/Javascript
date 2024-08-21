class user {
  constructor(email, password) {
    // this.username = username;
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    return (this._email = value);
  }

  get password() {
    return `${this._password}abc`;
  }

  set password(value) {
    this._password = value;
  }
}

const sahil = new user("sahil@gmail", "12345");
console.log(sahil.password);
console.log(sahil.email);
