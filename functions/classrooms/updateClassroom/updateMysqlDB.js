import { connect } from "../../connect";

module.exports.updateMysqlDB = (ownerID, courseCode, company, id) => {
  // MySQL DB operation
  const query = `UPDATE classroom SET ownerID = '${ownerID}', courseCode = '${courseCode}', company = '${company}' WHERE classroomID = '${id}';`;
  return connect(query);
};
