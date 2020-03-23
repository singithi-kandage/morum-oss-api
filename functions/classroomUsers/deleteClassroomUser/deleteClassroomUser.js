import { deleteFromMysqlDB } from "./deleteFromMysqlDB";
import { deleteFromDynamoDB } from "./deleteFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.deleteClassroomUser = async event => {
  const id = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return deleteFromMysqlDB(id);
  }

  return deleteFromDynamoDB(id);
};
