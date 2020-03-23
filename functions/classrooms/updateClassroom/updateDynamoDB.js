import { CONFIG_CLASSROOM_TABLE, ReturnDocumentClient } from "../../utils";

const documentClient = ReturnDocumentClient();

export const updateDynamoDB = async (ownerID, courseCode, company, id) => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_TABLE,
    Item: {
      classroomID: id,
      ownerID: ownerID,
      courseCode: courseCode,
      company: company
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

export default { updateDynamoDB };
