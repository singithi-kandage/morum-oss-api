import crypto from "crypto";
import Project from "../../../models/project";

import { insertIntoMysqlDB } from "./insertIntoMysqlDB";
import { insertIntoDynamoDB } from "./insertIntoDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const createProject = async (event) => {
  const { containerID, templateID, classroomID } = JSON.parse(event.body);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();

  const project = new Project(projectID, containerID, templateID, classroomID);

  if (IS_OFFLINE === true) {
    return insertIntoMysqlDB(project);
  }

  return insertIntoDynamoDB(project);
};

export default { createProject };
