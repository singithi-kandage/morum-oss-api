import { CONFIG_CLASSROOM_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const getFromDynamoDB = async id => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_USER_TABLE,
    Key: { id }
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

export default { getFromDynamoDB };
