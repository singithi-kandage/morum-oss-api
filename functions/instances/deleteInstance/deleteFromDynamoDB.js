import { CONFIG_INSTANCE_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const deleteFromDynamoDB = async instanceID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_INSTANCE_TABLE,
    Key: { instanceID }
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
