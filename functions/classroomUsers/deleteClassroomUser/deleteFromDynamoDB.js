import { CONFIG_CLASSROOM_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.deleteFromDynamoDB = async (classroomID, index) => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_TABLE,
    Key: { classroomID },
    UpdateExpression: `REMOVE users[${index}]`,
    ReturnValues: "UPDATED_NEW"
  };

  try {
    const data = await documentClient.update(params).promise();
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
