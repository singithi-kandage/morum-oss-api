import { connect } from "../connect";

module.exports.deleteUser = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `DELETE FROM user WHERE userID = ${id};`;

  return connect(query);
};
