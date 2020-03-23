import { connect } from "../../connect";

module.exports.getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM classroom_user WHERE id = '${id}';`;
  return connect(query);
};
