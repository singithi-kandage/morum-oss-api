import { connect } from "../connect";

module.exports.getClassroom = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM classroom WHERE classroomID = ${id};`;

  return connect(query);
};
