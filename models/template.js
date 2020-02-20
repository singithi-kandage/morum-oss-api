export default class Template {
  constructor(templateID, name) {
    this.templateID = templateID;
    this.name = name;
  }

  get templateID() {
    return this._templateID;
  }

  set templateID(value) {
    this._templateID = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
