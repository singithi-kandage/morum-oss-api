import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.getProject = async event => {
  const projectID = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(projectID);
  }

  return getFromDynamoDB(projectID);
};
