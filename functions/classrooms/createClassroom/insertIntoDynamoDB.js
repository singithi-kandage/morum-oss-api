import { CONFIG_CLASSROOM_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const insertIntoDynamoDB = async classroom => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_TABLE,
    Item: {
      classroomID: classroom.classroomID,
      ownerID: classroom.ownerID,
      courseCode: classroom.courseCode,
      company: classroom.company
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
