import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.getTemplate = async event => {
  const id = JSON.parse(event).pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(id);
  }

  return getFromDynamoDB(id);
};
