import { connect } from "../connect";

module.exports.getClassroomUsers = async event => {
  const classroomID = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM classroom_user WHERE classroomID = ${classroomID};`;

  return connect(query);
};
