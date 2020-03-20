import { connect } from "../../connect";

module.exports.insertIntoMysqlDB = user => {
  // Mysql operation
  const query = `INSERT INTO user (userID, email) VALUES (${user.userID}, ${user.email});`;
  return connect(query);
};
