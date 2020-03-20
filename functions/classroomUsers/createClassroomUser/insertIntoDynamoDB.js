import { CONFIG_CLASSROOM_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.insertIntoDynamoDB = async (userID, classroomID) => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_TABLE,
    Key: { classroomID },
    UpdateExpression: "SET #attrName = list_append(#attrName, :attrValue)",
    ExpressionAttributeNames: {
      "#attrName": "users"
    },
    ExpressionAttributeValues: {
      ":attrValue": [
        {
          userID: userID
        }
      ]
    },
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
