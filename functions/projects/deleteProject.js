import { connect } from "../connect";

module.exports.deleteProject = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `DELETE FROM project WHERE projectID = ${id};`;

  return connect(query);
};
