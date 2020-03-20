import crypto from "crypto";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";
import Classroom from "../../../../models/classroom";
import { CONFIG_CLASSROOM_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_CLASSROOM_TABLE = "classroom";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();
  const userID = generateUUID();

  const result = await insertIntoDynamoDB(classroomID, userID);

  expect(CONFIG_CLASSROOM_TABLE).toBe("classroom");
  expect(expected).toEqual(result);
});
