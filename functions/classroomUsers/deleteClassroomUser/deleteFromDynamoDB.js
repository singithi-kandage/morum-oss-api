import { CONFIG_CLASSROOM_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const deleteFromDynamoDB = async id => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_USER_TABLE,
    Key: { id }
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
