import { connect } from "../connect";

module.exports.getUser = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM user WHERE userID = ${id};`;

  return connect(query);
};
