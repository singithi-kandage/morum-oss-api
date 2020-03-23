import { connect } from "../../connect";

export const insertIntoMysqlDB = user => {
  // Mysql operation
  const query = `INSERT INTO user (userID, email) VALUES ('${user.userID}', '${user.email}');`;
  return connect(query);
};

export default { insertIntoMysqlDB };
