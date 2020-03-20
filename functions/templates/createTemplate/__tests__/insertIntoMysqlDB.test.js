import crypto from "crypto";
import Template from "../../../../models/template";
import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls insertIntoMysqlDB", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();
  const name = "Test name";

  const template = new Template(templateID, name);

  const result = await insertIntoMysqlDB(template);

  expect(result).toEqual(expected);
});
