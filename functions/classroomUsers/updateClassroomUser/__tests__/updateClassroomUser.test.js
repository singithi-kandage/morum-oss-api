import crypto from "crypto";
import { updateClassroomUser } from "../updateClassroomUser";
import { IS_OFFLINE } from "../../../utils";
import * as utils from "../../../utils";

jest.mock("../updateMysqlDB.js");
jest.mock("../updateDynamoDB.js");

import { updateMysqlDB } from "../updateMysqlDB";
import { updateDynamoDB } from "../updateDynamoDB";

const expected = { statusCode: 200 };

beforeEach(() => {
  updateMysqlDB.mockReturnValue(expected);
  updateDynamoDB.mockReturnValue(expected);
});

afterEach(() => {
  updateMysqlDB.mockReset();
  updateDynamoDB.mockReset();
});

test("Correctly updates classroomUser", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = {
    pathParameters: classroomID,
    body: JSON.stringify({
      userID: userID,
      classroomID: classroomID
    })
  };

  const result = await updateClassroomUser(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("updateDynamoDB is called", async () => {
  utils.IS_OFFLINE = false;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = {
    pathParameters: classroomID,
    body: JSON.stringify({
      userID: userID,
      classroomID: classroomID
    })
  };

  await updateClassroomUser(event);

  expect(IS_OFFLINE).toBe(false);
  expect(updateDynamoDB).toBeCalledTimes(1);
  expect(updateMysqlDB).toBeCalledTimes(0);
});

test("updateMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const userID = generateUUID();
  const classroomID = generateUUID();

  const event = {
    pathParameters: classroomID,
    body: JSON.stringify({
      userID: userID,
      classroomID: classroomID
    })
  };

  await updateClassroomUser(event);

  expect(IS_OFFLINE).toBe(true);
  expect(updateDynamoDB).toBeCalledTimes(0);
  expect(updateMysqlDB).toBeCalledTimes(1);
});
