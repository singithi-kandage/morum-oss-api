import { getClassroomUser } from "../getClassroomUser";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly gets classroomUser with id", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();

  const event = JSON.stringify({
    pathParameters: id
  });

  const result = await getClassroomUser(event);

  expect(result).toEqual(expected);
});
