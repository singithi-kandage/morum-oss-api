import { connect } from "../connect";

module.exports.updateClassroomUser = async event => {
  const id = JSON.parse(event).pathParameters.id;
  const { userID, classroomID } = JSON.parse(event).body;

  // Initialize query
  const query = `UPDATE classroom_user SET userID = ${userID}, classroomID = ${classroomID} WHERE id = ${id};`;

  return connect(query);
};
