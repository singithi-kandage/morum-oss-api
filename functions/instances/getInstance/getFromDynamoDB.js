import { CONFIG_INSTANCE_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.getFromDynamoDB = async instanceID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_INSTANCE_TABLE,
    Key: { instanceID }
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
