import crypto from "crypto";
import { getUser } from "../getUser";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly gets user", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();

  const event = JSON.stringify({
    pathParameters: userID
  });

  const result = await getUser(event);

  expect(result).toEqual(expected);
});
