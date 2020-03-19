import crypto from "crypto";
import Classroom from "../../../../models/classroom";
import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { connect } from "../../../connect";

jest.mock("../../../connect.js");

test("Correctly calls insertIntoMysqlDB", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const classroomID = generateUUID();
  const ownerID = generateUUID();
  const courseCode = "Test Course Code";
  const company = "Test Company";

  const classroom = new Classroom(classroomID, ownerID, courseCode, company);

  const result = await insertIntoMysqlDB(classroom);

  expect(result).toEqual(expected);
});
