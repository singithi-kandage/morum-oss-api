import { CONFIG_CLASSROOM_USER_TABLE, ReturnDocumentClient } from "../../utils";
import ClassroomUser from "../../../models/classroomUser";

const documentClient = ReturnDocumentClient();

module.exports.insertIntoDynamoDB = async classroomUser => {
  // DynamoDB operation
  const params = {
    TableName: CONFIG_CLASSROOM_USER_TABLE,
    Item: {
      id: classroomUser.id,
      userID: classroomUser.userID,
      classroomID: classroomUser.classroomID
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
