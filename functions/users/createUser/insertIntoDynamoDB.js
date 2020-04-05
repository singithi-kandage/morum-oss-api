import { CONFIG_USER_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const insertIntoDynamoDB = async (user) => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_USER_TABLE,
    Item: {
      userID: user.userID,
      email: user.email,
    },
    ConditionExpression: "attribute_not_exists(id)", // ensures that duplicate ids cannot be stored
  };

  try {
    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Item.userID),
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500,
    };
  }
};

export default { insertIntoDynamoDB };
