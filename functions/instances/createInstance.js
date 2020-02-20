import crypto from "crypto";
import { connect } from "../connect";
import Instance from "../../models/instance";

module.exports.createInstance = async event => {
  const { projectID, userID } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const instance = new Instance(instanceID, projectID, userID);

  // Initialize query
  const query = `INSERT INTO instance (instanceID, projectID, userID) VALUES (${instance.instanceID}, ${instance.projectID}, ${instance.userID});`;

  return connect(query);
};
