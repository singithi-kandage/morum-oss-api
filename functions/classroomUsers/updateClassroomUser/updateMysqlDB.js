import { connect } from "../../connect";

module.exports.updateMysqlDB = (userID, classroomID, id) => {
  // Mysql operation
  const query = `UPDATE classroom_user SET userID = '${userID}', classroomID = '${classroomID}' WHERE id = '${id}';`;
  return connect(query);
};
