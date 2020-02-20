import crypto from "crypto";
import { createProject } from "../createProject";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly creates project", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const containerID = generateUUID();
  const templateID = generateUUID();
  const classroomID = generateUUID();

  const event = JSON.stringify({
    body: {
      containerID: containerID,
      templateID: templateID,
      classroomID: classroomID
    }
  });

  const result = await createProject(event);

  expect(result).toEqual(expected);
});
