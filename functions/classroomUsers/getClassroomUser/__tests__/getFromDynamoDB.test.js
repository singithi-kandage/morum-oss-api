import crypto from "crypto";
import { getFromDynamoDB } from "../getFromDynamoDB";
import { CONFIG_CLASSROOM_USER_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("getFromDynamoDB is correctly called", async () => {
  utils.CONFIG_CLASSROOM_USER_TABLE = "classroomUser";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();

  const result = await getFromDynamoDB(id);

  expect(CONFIG_CLASSROOM_USER_TABLE).toBe("classroomUser");
  expect(expected).toEqual(result);
});
