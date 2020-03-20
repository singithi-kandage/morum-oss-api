import { getClassroomUsers } from "../getClassroomUsers/getClassroomUsers";
import { deleteFromMysqlDB } from "./deleteFromMysqlDB";
import { deleteFromDynamoDB } from "./deleteFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.deleteClassroomUser = async event => {
  const id = JSON.parse(event).pathParameters.id;
  const { classroomID, index } = JSON.parse(event).body;

  if (IS_OFFLINE === true) {
    return deleteFromMysqlDB(id);
  }

  return deleteFromDynamoDB(classroomID, index);
};
