import AWS from "aws-sdk";

export const IS_OFFLINE = process.env.IS_OFFLINE;
export const CONFIG_DYNAMODB_ENDPOINT = process.env.CONFIG_DYNAMODB_ENDPOINT;

export const CONFIG_CLASSROOM_TABLE = process.env.CONFIG_CLASSROOM_TABLE;
export const CONFIG_CLASSROOM_USER_TABLE =
  process.env.CONFIG_CLASSROOM_USER_TABLE;
export const CONFIG_INSTANCE_TABLE = process.env.CONFIG_INSTANCE_TABLE;
export const CONFIG_PROJECT_TABLE = process.env.CONFIG_PROJECT_TABLE;
export const CONFIG_TEMPLATE_TABLE = process.env.CONFIG_TEMPLATE_TABLE;
export const CONFIG_USER_TABLE = process.env.CONFIG_USER_TABLE;

// Initialising the DynamoDB SDK
export const ReturnDocumentClient = () => {
  let documentClient;
  if (IS_OFFLINE === "true") {
    documentClient = new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: CONFIG_DYNAMODB_ENDPOINT
    });
  } else {
    documentClient = new AWS.DynamoDB.DocumentClient();
  }
  return documentClient;
};

export default {
  IS_OFFLINE,
  CONFIG_CLASSROOM_TABLE,
  CONFIG_CLASSROOM_USER_TABLE,
  CONFIG_INSTANCE_TABLE,
  CONFIG_PROJECT_TABLE,
  CONFIG_TEMPLATE_TABLE,
  CONFIG_USER_TABLE,
  ReturnDocumentClient
};
