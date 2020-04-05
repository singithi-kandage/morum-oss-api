import crypto from "crypto";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";
import Project from "../../../../models/project";
import { CONFIG_PROJECT_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_PROJECT_TABLE = "project";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();
  const status = "Pending";
  const templateID = generateUUID();
  const classroomID = generateUUID();

  const project = new Project(projectID, status, templateID, classroomID);

  const result = await insertIntoDynamoDB(project);

  expect(CONFIG_PROJECT_TABLE).toBe("project");
  expect(expected).toEqual(result);
});
