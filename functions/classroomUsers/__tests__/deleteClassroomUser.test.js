import crypto from "crypto";
import { deleteClassroomUser } from "../deleteClassroomUser";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly deletes classroomUser", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();

  const event = JSON.stringify({
    pathParameters: id
  });

  const result = await deleteClassroomUser(event);

  expect(result).toEqual(expected);
});
