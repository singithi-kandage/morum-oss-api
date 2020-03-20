import crypto from "crypto";
import { getFromDynamoDB } from "../getFromDynamoDB";
import { CONFIG_PROJECT_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_PROJECT_TABLE = "project";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();

  const result = await getFromDynamoDB(classroomID);

  expect(CONFIG_PROJECT_TABLE).toBe("project");
  expect(expected).toEqual(result);
});
