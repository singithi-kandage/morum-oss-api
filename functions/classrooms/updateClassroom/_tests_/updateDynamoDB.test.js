import crypto from "crypto";
import { updateDynamoDB } from "../updateDynamoDB";
import { CONFIG_CLASSROOM_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("updateDynamoDB is correctly called", async () => {
  utils.CONFIG_CLASSROOM_TABLE = "classroom";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const ownerID = generateUUID();
  const courseCode = "Test Course Code";
  const company = "Test company;";

  const result = await updateDynamoDB(ownerID, courseCode, company, id);

  expect(CONFIG_CLASSROOM_TABLE).toBe("classroom");
  expect(expected).toEqual(result);
});
