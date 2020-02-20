import { connect } from "../connect";

module.exports.updateClassroom = async event => {
  const id = JSON.parse(event).pathParameters.id;
  const { ownerId, courseCode, company } = JSON.parse(event).body;

  // Initialize query
  const query = `UPDATE classroom SET ownerID = ${ownerId}, courseCode = ${courseCode}, company = ${company} WHERE classroomID = ${id};`;

  return connect(query);
};
