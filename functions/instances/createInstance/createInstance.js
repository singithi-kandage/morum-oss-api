import crypto from "crypto";
import Instance from "../../../models/instance";

import { insertIntoMysqlDB } from "./insertIntoMysqlDB";
import { insertIntoDynamoDB } from "./insertIntoDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.createInstance = async event => {
  const { projectID, userID } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const instance = new Instance(instanceID, projectID, userID);

  if (IS_OFFLINE === true) {
    return insertIntoMysqlDB(instance);
  }

  return insertIntoDynamoDB(instance);
};
