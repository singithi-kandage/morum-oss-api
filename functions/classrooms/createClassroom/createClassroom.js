import crypto from "crypto";
import Classroom from "../../../models/classroom";

import { insertIntoMysqlDB } from "./insertIntoMysqlDB";
import { insertIntoDynamoDB } from "./insertIntoDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.createClassroom = event => {
  const { ownerID, courseCode, company } = JSON.parse(event.body);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();

  const classroom = new Classroom(classroomID, ownerID, courseCode, company);

  if (IS_OFFLINE === true) {
    return insertIntoMysqlDB(classroom);
  }

  return insertIntoDynamoDB(classroom);
};
