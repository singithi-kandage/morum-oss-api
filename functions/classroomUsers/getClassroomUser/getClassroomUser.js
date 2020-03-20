import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.getClassroomUser = async event => {
  const id = JSON.parse(event).pathParameters.id;
  const { classroomID, index } = JSON.parse(event).body;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(id);
  }

  return getFromDynamoDB(classroomID, index);
};
