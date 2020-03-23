import { CONFIG_PROJECT_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const insertIntoDynamoDB = async project => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_PROJECT_TABLE,
    Item: {
      projectID: project.projectID,
      containerID: project.containerID,
      templateID: project.templateID,
      classroomID: project.classroomID
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
