export default class ClassroomUser {
  constructor(id, userID, classroomID) {
    this.id = id;
    this.userID = userID;
    this.classroomID = classroomID;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get userID() {
    return this._userID;
  }

  set userID(value) {
    this._userID = value;
  }

  get classroomID() {
    return this._classroomID;
  }

  set classroomID(value) {
    this._classroomID = value;
  }
}
