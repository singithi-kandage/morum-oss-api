import { updateMysqlDB } from "./updateMysqlDB";
import { updateDynamoDB } from "./updateDynamoDB";
import { IS_OFFLINE } from "../../utils";

export const updateClassroomUser = async event => {
  const id = event.pathParameters.id;
  const { userID, classroomID } = JSON.parse(event.body);

  if (IS_OFFLINE === true) {
    return updateMysqlDB(userID, classroomID, id);
  }

  return updateDynamoDB(userID, classroomID, id);
};

export default { updateClassroomUser };
