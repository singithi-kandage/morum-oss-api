import { connect } from "../../connect";

module.exports.insertIntoMysqlDB = template => {
  // Mysql operation
  const query = `INSERT INTO template (templateID, name) VALUES ('${template.templateID}', '${template.name}');`;
  return connect(query);
};
