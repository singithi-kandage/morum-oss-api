import { connect } from "../../connect";

export const insertIntoMysqlDB = project => {
  // Mysql operation
  const query = `INSERT INTO project (projectID, containerID, templateID, classroomID) VALUES ('${project.projectID}', '${project.containerID}',  '${project.templateID}', '${project.classroomID}');`;
  return connect(query);
};

export default { insertIntoMysqlDB };
