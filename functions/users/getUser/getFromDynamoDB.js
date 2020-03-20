import { CONFIG_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.getFromDynamoDB = async userID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_USER_TABLE,
    Key: { userID }
  };

  try {
    // Utilising the get method to retrieve an indvidual item
    const data = await documentClient.get(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Item)
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};
