import { connect } from "../../connect";

export const getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM instance WHERE instanceID = '${id}';`;
  return connect(query);
};

export default { getFromMysqlDB };
