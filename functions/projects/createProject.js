import crypto from "crypto";
import { connect } from "../connect";
import Project from "../../models/project";

module.exports.createProject = async event => {
  const { containerID, templateID, classroomID } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const projectID = generateUUID();

  const project = new Project(projectID, containerID, templateID, classroomID);

  // Initialize query
  const query = `INSERT INTO project (projectID, containerID, templateID, classroomID) VALUES (${project.projectID}, ${project.containerID},  ${project.templateID}, ${project.classroomID});`;

  return connect(query);
};
