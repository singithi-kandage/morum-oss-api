import { CONFIG_CLASSROOM_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.getFromDynamoDB = async (classroomID, index) => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_TABLE,
    Key: { classroomID }
  };

  try {
    // Utilising the get method to retrieve an indvidual item
    const data = await documentClient.get(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Item.users[index])
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};
