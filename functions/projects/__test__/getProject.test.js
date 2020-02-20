import crypto from "crypto";
import { getProject } from "../getProject";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly gets project", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();

  const event = JSON.stringify({
    pathParameters: projectID
  });

  const result = await getProject(event);

  expect(result).toEqual(expected);
});
