import { connect } from "../../connect";

module.exports.deleteFromMysqlDB = id => {
  // MySQL DB operation
  const query = `DELETE FROM classroom WHERE classroomID = '${id}';`;
  return connect(query);
};
