import crypto from "crypto";
import { getFromMysqlDB } from "../getFromMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls getFromMysqlDB", async () => {
  const expected = { statusCode: 200, body: JSON.stringify({ test: "test" }) };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const result = await getFromMysqlDB(instanceID);

  expect(result).toEqual(expected);
});
