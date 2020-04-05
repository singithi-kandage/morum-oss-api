import crypto from "crypto";
import Project from "../../../../models/project";
import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls insertIntoMysqlDB", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();
  const status = "Pending";
  const templateID = generateUUID();
  const classroomID = generateUUID();

  const project = new Project(projectID, status, templateID, classroomID);

  const result = await insertIntoMysqlDB(project);

  expect(result).toEqual(expected);
});
