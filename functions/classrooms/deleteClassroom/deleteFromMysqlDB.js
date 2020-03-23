import { connect } from "../../connect";

export const deleteFromMysqlDB = id => {
  // MySQL DB operation
  const query = `DELETE FROM classroom WHERE classroomID = '${id}';`;
  return connect(query);
};

export default { deleteFromMysqlDB };
