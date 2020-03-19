import crypto from "crypto";
import { updateMysqlDB } from "../updateMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls updateMysqlDB", async () => {
  const expected = { statusCode: 200, body: JSON.stringify({ test: "test" }) };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const ownerID = generateUUID();
  const courseCode = "Test Course Code";
  const company = "Test company;";

  const result = await updateMysqlDB(ownerID, courseCode, company, id);

  expect(result).toEqual(expected);
});
