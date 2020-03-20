import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.getUser = async event => {
  const userID = JSON.parse(event).pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(userID);
  }

  return getFromDynamoDB(userID);
};
