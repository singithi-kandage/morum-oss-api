import { connect } from "../../connect";

export const deleteFromMysqlDB = id => {
  // Mysql operation
  const query = `DELETE FROM instance WHERE instanceID = '${id}';`;
  return connect(query);
};

export default { deleteFromMysqlDB };
