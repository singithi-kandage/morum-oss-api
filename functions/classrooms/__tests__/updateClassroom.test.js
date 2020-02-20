import { updateClassroom } from "../updateClassroom";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly updates classroom", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();
  const ownerID = generateUUID();

  const event = JSON.stringify({
    pathParameters: classroomID,
    body: {
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    }
  });

  const result = await updateClassroom(event);

  expect(result).toEqual(expected);
});
