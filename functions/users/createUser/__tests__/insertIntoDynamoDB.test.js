import crypto from "crypto";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";
import User from "../../../../models/user";
import { CONFIG_USER_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_USER_TABLE = "user";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const email = "test@gmail.com";

  const user = new User(userID, email);

  const result = await insertIntoDynamoDB(user);

  expect(CONFIG_USER_TABLE).toBe("user");
  expect(expected).toEqual(result);
});
