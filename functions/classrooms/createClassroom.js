const crypto = require("crypto");
import { connect } from "../connect";
import Classroom from "../../models/classroom";

module.exports.createClassroom = event => {
  const { ownerID, courseCode, company } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();

  const classroom = new Classroom(classroomID, ownerID, courseCode, company);

  // Initialize query
  const query = `INSERT INTO classroom (classroomID, ownerID, courseCode, company) VALUES (${classroom.classroomID}, ${classroom.ownerID}, ${classroom.courseCode}, ${classroom.company});`;

  return connect(query);
};
