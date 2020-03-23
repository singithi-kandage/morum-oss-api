import { CONFIG_PROJECT_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const deleteFromDynamoDB = async projectID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_PROJECT_TABLE,
    Key: { projectID }
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

export default { deleteFromDynamoDB };
