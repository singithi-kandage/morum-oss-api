import { connect } from "../../connect";

module.exports.deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM classroom_user WHERE id = ${id};`;
  return connect(query);
};
