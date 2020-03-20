import { updateMysqlDB } from "./updateMysqlDB";
import { IS_OFFLINE } from "../../utils";

module.exports.updateClassroomUser = async event => {
  const id = JSON.parse(event).pathParameters.id;
  const { userID, classroomID } = JSON.parse(event).body;

  if (IS_OFFLINE === true) {
    return updateMysqlDB(userID, classroomID, id);
  }
};
