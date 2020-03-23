import crypto from "crypto";
import { getFromDynamoDB } from "../getFromDynamoDB";
import { CONFIG_INSTANCE_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("getFromDynamoDB is correctly called", async () => {
  utils.CONFIG_INSTANCE_TABLE = "instance";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const result = await getFromDynamoDB(instanceID);

  expect(CONFIG_INSTANCE_TABLE).toBe("instance");
  expect(expected).toEqual(result);
});
