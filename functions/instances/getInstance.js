import { connect } from "../connect";

module.exports.getInstance = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `SELECT * FROM instance WHERE instanceID = ${id};`;

  return connect(query);
};
