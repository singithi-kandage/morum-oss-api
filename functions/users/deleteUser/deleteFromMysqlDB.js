import { connect } from "../../connect";

export const deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM user WHERE userID = '${id}';`;
  return connect(query);
};

export default { deleteFromMysqlDB };
