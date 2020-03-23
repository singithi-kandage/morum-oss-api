import { connect } from "../../connect";

module.exports.getFromMysqlDB = id => {
  // MySQL DB operation
  const query = `SELECT * FROM classroom WHERE classroomID = '${id}';`;
  return connect(query);
};
