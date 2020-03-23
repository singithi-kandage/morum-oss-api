import crypto from "crypto";
import { updateDynamoDB } from "../updateDynamoDB";
import { CONFIG_CLASSROOM_USER_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("updateDynamoDB is correctly called", async () => {
  utils.CONFIG_CLASSROOM_USER_TABLE = "classroomUser";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const classroomID = generateUUID();
  const userID = generateUUID();

  const result = await updateDynamoDB(userID, classroomID, id);

  expect(CONFIG_CLASSROOM_USER_TABLE).toBe("classroomUser");
  expect(expected).toEqual(result);
});
