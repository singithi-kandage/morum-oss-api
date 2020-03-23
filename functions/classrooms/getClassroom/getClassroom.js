import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const getClassroom = async event => {
  const classroomID = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(classroomID);
  }

  return getFromDynamoDB(classroomID);
};

export default { getClassroom };
