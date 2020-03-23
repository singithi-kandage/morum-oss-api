import { CONFIG_CLASSROOM_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const deleteFromDynamoDB = async classroomID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_TABLE,
    Key: { classroomID }
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
