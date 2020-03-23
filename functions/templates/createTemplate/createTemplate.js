import crypto from "crypto";
import Template from "../../../models/template";

import { insertIntoMysqlDB } from "./insertIntoMysqlDB";
import { insertIntoDynamoDB } from "./insertIntoDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const createTemplate = async event => {
  const { name } = JSON.parse(event.body);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const template = new Template(templateID, name);

  if (IS_OFFLINE === true) {
    return insertIntoMysqlDB(template);
  }

  return insertIntoDynamoDB(template);
};

export default { createTemplate };
