export default class Classroom {
  constructor(classroomID, ownerID, courseCode, company) {
    this.classroomID = classroomID;
    this.ownerID = ownerID;
    this.courseCode = courseCode;
    this.company = company;
  }

  get classroomID() {
    return this._classroomID;
  }

  set classroomID(value) {
    this._classroomID = value;
  }

  get ownerID() {
    return this._ownerID;
  }

  set ownerID(value) {
    this._ownerID = value;
  }

  get courseCode() {
    return this._courseCode;
  }

  set courseCode(value) {
    this._courseCode = value;
  }

  get company() {
    return this._company;
  }

  set company(value) {
    this._company = value;
  }
}
