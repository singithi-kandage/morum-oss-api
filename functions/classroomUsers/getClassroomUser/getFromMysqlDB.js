import { connect } from "../../connect";

export const getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM classroom_user WHERE id = '${id}';`;
  return connect(query);
};

export default { getFromMysqlDB };
