import { connect } from "../../connect";

module.exports.getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM project WHERE projectID = ${id};`;
  return connect(query);
};
