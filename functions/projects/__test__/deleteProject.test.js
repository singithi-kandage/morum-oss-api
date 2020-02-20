import crypto from "crypto";
import { deleteProject } from "../deleteProject";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly deletes project", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();

  const event = JSON.stringify({
    pathParameters: projectID
  });

  const result = await deleteProject(event);

  expect(result).toEqual(expected);
});
