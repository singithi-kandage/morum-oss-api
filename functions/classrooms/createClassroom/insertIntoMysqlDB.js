import { connect } from "../../connect";

module.exports.insertIntoMysqlDB = classroom => {
  // MySQL DB operation
  const query = `INSERT INTO classroom (classroomID, ownerID, courseCode, company) VALUES (${classroom.classroomID}, ${classroom.ownerID}, ${classroom.courseCode}, ${classroom.company});`;
  return connect(query);
};
