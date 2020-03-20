import crypto from "crypto";
import Instance from "../../../../models/instance";
import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls insertIntoMysqlDB", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();
  const projectID = generateUUID();
  const userID = "Test Course Code";

  const instance = new Instance(instanceID, projectID, userID);

  const result = await insertIntoMysqlDB(instance);

  expect(result).toEqual(expected);
});
