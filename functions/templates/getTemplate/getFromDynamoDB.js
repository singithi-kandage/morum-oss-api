import { CONFIG_TEMPLATE_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const getFromDynamoDB = async templateID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_TEMPLATE_TABLE,
    Key: { templateID }
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
