export default class Instance {
  constructor(instanceID, projectID, userID) {
    this.instanceID = instanceID;
    this.projectID = projectID;
    this.userID = userID;
  }

  get instanceID() {
    return this._instanceID;
  }

  set instanceID(value) {
    this._instanceID = value;
  }

  get projectID() {
    return this._projectID;
  }

  set projectID(value) {
    this._projectID = value;
  }

  get userID() {
    return this._userID;
  }

  set userID(value) {
    this._userID = value;
  }
}
