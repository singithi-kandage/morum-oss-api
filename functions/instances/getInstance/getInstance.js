import { getFromMysqlDB } from "./getFromMysqlDB";
import { getFromDynamoDB } from "./getFromDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const getInstance = async event => {
  const instanceID = event.pathParameters.id;

  if (IS_OFFLINE === true) {
    return getFromMysqlDB(instanceID);
  }

  return getFromDynamoDB(instanceID);
};

export default { getInstance };
