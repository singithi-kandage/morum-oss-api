import { connect } from "../../connect";

module.exports.deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM instance WHERE instanceID = '${id}';`;
  return connect(query);
};
