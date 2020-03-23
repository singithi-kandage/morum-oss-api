import { connect } from "../../connect";

module.exports.insertIntoMysqlDB = classroomUser => {
  // Mysql operation
  const query = `INSERT INTO classroom_user (id, userID, classroomID) VALUES ('${classroomUser.id}', '${classroomUser.userID}', '${classroomUser.classroomID}');`;
  return connect(query);
};
