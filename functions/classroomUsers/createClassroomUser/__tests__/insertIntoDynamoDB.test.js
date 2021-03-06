import crypto from "crypto";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";
import ClassroomUser from "../../../../models/classroomUser";
import { CONFIG_CLASSROOM_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_CLASSROOM_TABLE = "classroom";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const userID = generateUUID();
  const classroomID = generateUUID();

  const classroomUser = new ClassroomUser(id, userID, classroomID);

  const result = await insertIntoDynamoDB(classroomUser);

  expect(CONFIG_CLASSROOM_TABLE).toBe("classroom");
  expect(expected).toEqual(result);
});
