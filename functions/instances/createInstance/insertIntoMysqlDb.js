import { connect } from "../../connect";

export const insertIntoMysqlDB = instance => {
  // Mysql operaiton
  const query = `INSERT INTO instance (instanceID, projectID, userID) VALUES ('${instance.instanceID}', '${instance.projectID}', '${instance.userID}');`;
  return connect(query);
};

export default { insertIntoMysqlDB };
