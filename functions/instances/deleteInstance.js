import { connect } from "../connect";

module.exports.deleteInstance = async event => {
  const id = JSON.parse(event).pathParameters.id;

  // Initialize query
  const query = `DELETE FROM instance WHERE instanceID = ${id};`;

  return connect(query);
};
