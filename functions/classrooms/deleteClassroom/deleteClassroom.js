import { deleteFromMysqlDB } from "./deleteFromMysqlDB";
import { deleteFromDynamoDB } from "./deleteFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.deleteClassroom = async event => {
  const classroomID = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return deleteFromMysqlDB(classroomID);
  }

  return deleteFromDynamoDB(classroomID);
};
