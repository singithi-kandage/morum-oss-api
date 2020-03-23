import { connect } from "../../connect";

module.exports.getFromMysqlDB = classroomID => {
  // Mysql operation
  const query = `SELECT * FROM classroom_user WHERE classroomID = '${classroomID}';`;
  return connect(query);
};
