import { connect } from "../../connect";

module.exports.getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM instance WHERE instanceID = '${id}';`;
  return connect(query);
};
