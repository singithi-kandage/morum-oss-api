import { connect } from "../connect";

module.exports.getTemplate = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM template WHERE templateID = ${id};`;

  return connect(query);
};
