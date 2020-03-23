import { connect } from "../../connect";

export const deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM classroom_user WHERE id = '${id}';`;
  return connect(query);
};

export default { deleteFromMysqlDB };
