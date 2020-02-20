import { createInstance } from "../createInstance";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly creates instance", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();
  const userID = generateUUID();

  const event = JSON.stringify({
    body: {
      projectID: projectID,
      userID: userID
    }
  });

  const result = await createInstance(event);

  expect(result).toEqual(expected);
});
