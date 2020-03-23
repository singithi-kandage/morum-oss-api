import { connect } from "../../connect";

export const insertIntoMysqlDB = template => {
  // Mysql operation
  const query = `INSERT INTO template (templateID, name) VALUES ('${template.templateID}', '${template.name}');`;
  return connect(query);
};

export default { insertIntoMysqlDB };
