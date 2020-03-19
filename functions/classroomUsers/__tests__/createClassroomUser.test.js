import crypto from "crypto";
import { createClassroomUser } from "../createClassroomUser";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly creates classroomUser", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = JSON.stringify({
    body: {
      userID: userID,
      classroomID: classroomID
    }
  });

  const result = await createClassroomUser(event);

  expect(result).toEqual(expected);
});
