import crypto from "crypto";
import { connect } from "../connect";
import User from "../../models/user";

module.exports.createUser = async event => {
  const { email } = JSON.parse(event).body;

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();

  const user = new User(userID, email);

  // Initialize query
  const query = `INSERT INTO user (userID, email) VALUES (${user.userID}, ${user.email});`;

  return connect(query);
};
