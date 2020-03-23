import { connect } from "../../connect";

export const getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM project WHERE projectID = '${id}';`;
  return connect(query);
};

export default { getFromMysqlDB };
