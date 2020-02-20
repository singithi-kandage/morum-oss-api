import crypto from "crypto";
import { deleteUser } from "../deleteUser";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly deletes user", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();

  const event = JSON.stringify({
    pathParameters: userID
  });

  const result = await deleteUser(event);

  expect(result).toEqual(expected);
});
