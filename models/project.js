export default class Project {
  constructor(projectID, status, templateID, classroomID) {
    this.projectID = projectID;
    this.status = status;
    this.templateID = templateID;
    this.classroomID = classroomID;
  }

  get projectID() {
    return this._projectID;
  }

  set projectID(value) {
    this._projectID = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get templateID() {
    return this._templateID;
  }

  set templateID(value) {
    this._templateID = value;
  }

  get classroomID() {
    return this._classroomID;
  }

  set classroomID(value) {
    this._classroomID = value;
  }
}
