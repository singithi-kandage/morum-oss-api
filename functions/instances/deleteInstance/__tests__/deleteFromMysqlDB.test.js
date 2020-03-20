import crypto from "crypto";
import { deleteFromMysqlDB } from "../deleteFromMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls deleteFromMysqlDB", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const result = await deleteFromMysqlDB(instanceID);

  expect(result).toEqual(expected);
});
