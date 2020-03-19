import crypto from "crypto";
import { connect } from "../connect";
import ClassroomUser from "../../models/classroomUser";

module.exports.createClassroomUser = async event => {
  const { userID, classroomID } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();

  const classroomUser = new ClassroomUser(id, userID, classroomID);

  // Initialize query
  const query = `INSERT INTO classroom_user (id, userID, classroomID) VALUES (${classroomUser.id}, ${classroomUser.userID}, ${classroomUser.classroomID});`;

  return connect(query);
};
