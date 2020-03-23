import { connect } from "../../connect";

module.exports.deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM project WHERE projectID = '${id}';`;
  return connect(query);
};
