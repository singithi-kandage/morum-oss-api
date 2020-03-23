import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const getUser = async event => {
  const userID = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(userID);
  }

  return getFromDynamoDB(userID);
};

export default { getUser };
