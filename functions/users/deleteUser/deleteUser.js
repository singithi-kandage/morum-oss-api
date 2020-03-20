import { deleteFromMysqlDB } from "./deleteFromMysqlDB";
import { deleteFromDynamoDB } from "./deleteFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.deleteUser = async event => {
  const id = JSON.parse(event).pathParameters.id;

  if (IS_OFFLINE === true) {
    return deleteFromMysqlDB(id);
  }

  return deleteFromDynamoDB(id);
};