import { CONFIG_INSTANCE_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const insertIntoDynamoDB = async instance => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_INSTANCE_TABLE,
    Item: {
      instanceID: instance.instanceID,
      projectID: instance.projectID,
      userID: instance.userID
    },
    ConditionExpression: "attribute_not_exists(id)" // ensures that duplicate ids cannot be stored
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

export default { insertIntoDynamoDB };
