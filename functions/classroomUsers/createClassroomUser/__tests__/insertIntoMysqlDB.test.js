import crypto from "crypto";
import ClassroomUser from "../../../../models/classroomUser";
import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls insertIntoMysqlDB", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const classroomUser = new ClassroomUser(userID, classroomID);

  const result = await insertIntoMysqlDB(classroomUser);

  expect(result).toEqual(expected);
});
