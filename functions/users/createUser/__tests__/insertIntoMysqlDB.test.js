import crypto from "crypto";
import User from "../../../../models/user";
import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { connect } from "../connect";

jest.mock("../connect.js");

test("Correctly calls insertIntoMysqlDB", async () => {
  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");

  const expected = {
    statusCode: 200,
    body: JSON.stringify({ userID: generateUUID() }),
  };
  connect.mockReturnValue(expected);

  const userID = generateUUID();
  const email = "test@gmail.com";

  const user = new User(userID, email);

  const result = await insertIntoMysqlDB(user);

  expect(result).toEqual(expected);
});
