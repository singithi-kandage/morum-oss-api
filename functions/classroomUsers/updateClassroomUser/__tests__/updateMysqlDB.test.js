import crypto from "crypto";
import { updateMysqlDB } from "../updateMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls updateMysqlDB", async () => {
  const expected = { statusCode: 200, body: JSON.stringify({ test: "test" }) };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();
  const id = generateUUID();

  const result = await updateMysqlDB(userID, classroomID, id);

  expect(result).toEqual(expected);
});
