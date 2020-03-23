import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.getClassroomUsers = async event => {
  const classroomID = event.pathParameters.classroomID;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(classroomID);
  }

  return getFromDynamoDB(classroomID);
};
