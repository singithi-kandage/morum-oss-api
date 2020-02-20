import { connect } from "../connect";

module.exports.deleteClassroom = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `DELETE FROM classroom WHERE classroomID = ${id};`;

  return connect(query);
};
