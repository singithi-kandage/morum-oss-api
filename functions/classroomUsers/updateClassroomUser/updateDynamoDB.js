import { CONFIG_CLASSROOM_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.updateDynamoDB = async (userID, classroomID, id) => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_USER_TABLE,
    Item: {
      id: id,
      classroomID: classroomID,
      userID: userID
    }
  };
  try {
    const data = await documentClient.put(params).promise();
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
