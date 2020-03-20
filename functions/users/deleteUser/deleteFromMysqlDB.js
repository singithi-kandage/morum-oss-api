import { connect } from "../../connect";

module.exports.deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM user WHERE userID = ${id};`;
  return connect(query);
};
