import crypto from "crypto";
import ClassroomUser from "../../../models/classroomUser";

import { insertIntoMysqlDB } from "./insertIntoMysqlDB";
import { insertIntoDynamoDB } from "./insertIntoDynamoDB";

import { IS_OFFLINE } from "../../utils";

module.exports.createClassroomUser = async event => {
  const { userID, classroomID } = JSON.parse(event.body);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();

  const classroomUser = new ClassroomUser(id, userID, classroomID);

  if (IS_OFFLINE === true) {
    return insertIntoMysqlDB(classroomUser);
  }

  return insertIntoDynamoDB(userID, classroomID);
};
