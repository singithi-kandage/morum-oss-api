import { connect } from "./connect";

export const insertIntoMysqlDB = (user) => {
  return connect(user);
};

export default { insertIntoMysqlDB };
