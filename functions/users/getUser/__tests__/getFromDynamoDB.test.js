import crypto from "crypto";
import { getFromDynamoDB } from "../getFromDynamoDB";
import { CONFIG_USER_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_USER_TABLE = "user";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();

  const result = await getFromDynamoDB(userID);

  expect(CONFIG_USER_TABLE).toBe("user");
  expect(expected).toEqual(result);
});
