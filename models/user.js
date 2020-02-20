export default class User {
  constructor(userID, email) {
    this.userID = userID;
    this.email = email;
  }

  get userID() {
    return this._userID;
  }

  set userID(value) {
    this._userID = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
}
