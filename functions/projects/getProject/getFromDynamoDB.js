import { CONFIG_PROJECT_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.getFromDynamoDB = async projectID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_PROJECT_TABLE,
    Key: { projectID }
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
