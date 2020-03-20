import { connect } from "../../connect";

module.exports.getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM template WHERE templateID = ${id};`;
  return connect(query);
};
