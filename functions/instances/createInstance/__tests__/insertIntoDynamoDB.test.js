import crypto from "crypto";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";
import Instance from "../../../../models/instance";
import { CONFIG_INSTANCE_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_INSTANCE_TABLE = "instance";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();
  const projectID = generateUUID();
  const userID = generateUUID();

  const instance = new Instance(instanceID, projectID, userID);

  const result = await insertIntoDynamoDB(instance);

  expect(CONFIG_INSTANCE_TABLE).toBe("instance");
  expect(expected).toEqual(result);
});
