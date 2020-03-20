import crypto from "crypto";
import User from "../../../models/user";

import { insertIntoMysqlDB } from "./insertIntoMysqlDB";
import { insertIntoDynamoDB } from "./insertIntoDynamoDB";
import { IS_OFFLINE } from "../../utils";

module.exports.createUser = async event => {
  const { email } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();

  const user = new User(userID, email);

  if (IS_OFFLINE === true) {
    return insertIntoMysqlDB(user);
  }

  return insertIntoDynamoDB(user);
};
