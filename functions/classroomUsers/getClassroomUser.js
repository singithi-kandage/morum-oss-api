import { connect } from "../connect";

module.exports.getClassroomUser = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM classroom_user WHERE id = ${id};`;

  return connect(query);
};
