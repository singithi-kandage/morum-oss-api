import { connect } from "../connect";

module.exports.deleteClassroomUser = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `DELETE FROM classroom_user WHERE id = ${id};`;

  return connect(query);
};
