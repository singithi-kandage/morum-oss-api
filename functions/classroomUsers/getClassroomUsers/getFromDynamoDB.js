import { CONFIG_CLASSROOM_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const getFromDynamoDB = async classroomID => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_USER_TABLE,
    ProjectionExpression: "id, classroomID, userID",
    KeyConditionExpression: "classroomID = :classroomID",
    FilterExpression: "contains (classroomID, :classroomID)",
    ExpressionAttributeValues: {
      ":classroomID": classroomID
    }
  };

  try {
    // Utilising the scan method to get all items in the table
    const data = await documentClient.scan(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};

export default { getFromDynamoDB };
