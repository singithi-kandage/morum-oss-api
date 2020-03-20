import { connect } from "../../connect";

module.exports.getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM user WHERE userID = ${id};`;
  return connect(query);
};
