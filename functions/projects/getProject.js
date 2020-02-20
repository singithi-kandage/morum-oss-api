import { connect } from "../connect";

module.exports.getProject = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM project WHERE projectID = ${id};`;

  return connect(query);
};
