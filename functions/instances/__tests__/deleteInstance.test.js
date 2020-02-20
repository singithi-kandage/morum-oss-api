import { deleteInstance } from "../deleteInstance";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly deletes instance", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const event = JSON.stringify({
    pathParameters: instanceID
  });

  const result = await deleteInstance(event);

  expect(result).toEqual(expected);
});
