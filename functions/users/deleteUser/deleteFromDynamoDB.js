import { CONFIG_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.deleteFromDynamoDB = async userID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_USER_TABLE,
    Key: { userID }
  };

  try {
    const data = await documentClient.delete(params).promise();
    const response = {
      statusCode: 200
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};
