import crypto from "crypto";
import { updateClassroomUser } from "../updateClassroomUser";
import { IS_OFFLINE } from "../../../utils";
import * as utils from "../../../utils";

jest.mock("../updateMysqlDB.js");

import { updateMysqlDB } from "../updateMysqlDB";

const expected = { statusCode: 200 };

beforeEach(() => {
  updateMysqlDB.mockReturnValue(expected);
});

afterEach(() => {
  updateMysqlDB.mockReset();
});

test("Correctly updates classroomUser", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = JSON.stringify({
    pathParameters: classroomID,
    body: {
      userID: userID,
      classroomID: classroomID
    }
  });

  const result = await updateClassroomUser(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("updateMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = JSON.stringify({
    pathParameters: classroomID,
    body: {
      userID: userID,
      classroomID: classroomID
    }
  });

  await updateClassroomUser(event);

  expect(IS_OFFLINE).toBe(true);
  expect(updateMysqlDB).toBeCalledTimes(1);
});
