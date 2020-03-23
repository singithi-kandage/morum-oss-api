import { connect } from "../../connect";

export const getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM user WHERE userID = '${id}';`;
  return connect(query);
};

export default { getFromMysqlDB };
