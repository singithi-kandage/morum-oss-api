import crypto from "crypto";
import { connect } from "../connect";
import Template from "../../models/template";

module.exports.createTemplate = async event => {
  const { name } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const template = new Template(templateID, name);

  // Initialize query
  const query = `INSERT INTO template (templateID, name) VALUES (${template.templateID}, ${template.name});`;

  return connect(query);
};
