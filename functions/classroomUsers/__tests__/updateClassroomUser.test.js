import { updateClassroomUser } from "../updateClassroomUser";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly updates classroomUser", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = JSON.stringify({
    pathParameters: classroomID,
    body: {
      userID: userID,
      classroomID: classroomID
    }
  });

  const result = await updateClassroomUser(event);

  expect(result).toEqual(expected);
});
