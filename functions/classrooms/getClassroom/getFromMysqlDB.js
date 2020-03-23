import { connect } from "../../connect";

export const getFromMysqlDB = id => {
  // MySQL DB operation
  const query = `SELECT * FROM classroom WHERE classroomID = '${id}';`;
  return connect(query);
};

export default { getFromMysqlDB };
