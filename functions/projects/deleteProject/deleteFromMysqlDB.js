import { connect } from "../../connect";

export const deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM project WHERE projectID = '${id}';`;
  return connect(query);
};

export default { deleteFromMysqlDB };
