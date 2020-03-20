import { CONFIG_TEMPLATE_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

module.exports.insertIntoDynamoDB = async template => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_TEMPLATE_TABLE,
    Item: {
      templateID: template.templateID,
      name: template.name
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
