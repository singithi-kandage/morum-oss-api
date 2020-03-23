import { connect } from "../../connect";

export const getFromMysqlDB = id => {
  // Mysql operation
  const query = `SELECT * FROM template WHERE templateID = '${id}';`;
  return connect(query);
};

export default { getFromMysqlDB };
