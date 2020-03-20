import crypto from "crypto";
import { deleteFromDynamoDB } from "../deleteFromDynamoDB";
import { CONFIG_CLASSROOM_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("deleteFromDynamoDB is correctly called", async () => {
  utils.CONFIG_CLASSROOM_TABLE = "classroom";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();
  const index = 0;

  const result = await deleteFromDynamoDB(classroomID, index);

  expect(CONFIG_CLASSROOM_TABLE).toBe("classroom");
  expect(expected).toEqual(result);
});
