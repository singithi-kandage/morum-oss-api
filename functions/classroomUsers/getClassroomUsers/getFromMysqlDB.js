import { connect } from "../../connect";

export const getFromMysqlDB = classroomID => {
  // Mysql operation
  const query = `SELECT * FROM classroom_user WHERE classroomID = '${classroomID}';`;
  return connect(query);
};

export default { getFromMysqlDB };
