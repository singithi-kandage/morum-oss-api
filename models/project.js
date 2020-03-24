export default class Project {
  constructor(projectID, containerID, templateID, classroomID) {
    this.projectID = projectID;
    this.containerID = containerID;
    this.templateID = templateID;
    this.classroomID = classroomID;
  }

  get projectID() {
    return this._projectID;
  }

  set projectID(value) {
    this._projectID = value;
  }

  get containerID() {
    return this._containerID;
  }

  set containerID(value) {
    this._containerID = value;
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
