import { connect } from "../../connect";

export const insertIntoMysqlDB = project => {
  // Mysql operation
  const query = `INSERT INTO project (projectID, status, templateID, classroomID) VALUES ('${project.projectID}', '${project.status}',  '${project.templateID}', '${project.classroomID}');`;
  return connect(query);
};

export default { insertIntoMysqlDB };
