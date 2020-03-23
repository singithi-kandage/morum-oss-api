import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const getClassroomUser = async event => {
  const id = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(id);
  }

  return getFromDynamoDB(id);
};

export default { getClassroomUser };
