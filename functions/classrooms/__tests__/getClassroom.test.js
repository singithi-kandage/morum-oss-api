import { getClassroom } from "../getClassroom";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly updates classroom", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();

  const event = JSON.stringify({
    pathParameters: classroomID
  });

  const result = await getClassroom(event);

  expect(result).toEqual(expected);
});
