import { updateMysqlDB } from "./updateMysqlDB";
import { updateDynamoDB } from "./updateDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.updateClassroom = async event => {
  const id = event.pathParameters.id;
  const { ownerID, courseCode, company } = JSON.parse(event.body);

  if (IS_OFFLINE === true) {
    return updateMysqlDB(ownerID, courseCode, company, id);
  }

  return updateDynamoDB(ownerID, courseCode, company, id);
};
