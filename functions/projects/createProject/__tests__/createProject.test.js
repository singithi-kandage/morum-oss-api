import crypto from "crypto";
import { createProject } from "../createProject";
import { IS_OFFLINE } from "../../../utils";
import * as utils from "../../../utils";

jest.mock("../insertIntoMysqlDB.js");
jest.mock("../insertIntoDynamoDB.js");

import { insertIntoMysqlDB } from "../insertIntoMysqlDB";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";

const expected = { statusCode: 200 };

beforeEach(() => {
  insertIntoDynamoDB.mockReturnValue(expected);
  insertIntoMysqlDB.mockReturnValue(expected);
});

afterEach(() => {
  insertIntoDynamoDB.mockReset();
  insertIntoMysqlDB.mockReset();
});

test("Correctly creates project", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();
  const classroomID = generateUUID();

  const event = {
    body: JSON.stringify({
      templateID: templateID,
      classroomID: classroomID,
    }),
  };

  const result = await createProject(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("insertIntoDynamoDB is called", async () => {
  utils.IS_OFFLINE = false;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();
  const classroomID = generateUUID();

  const event = {
    body: JSON.stringify({
      templateID: templateID,
      classroomID: classroomID,
    }),
  };

  await createProject(event);

  expect(IS_OFFLINE).toBe(false);
  expect(insertIntoDynamoDB).toBeCalledTimes(1);
  expect(insertIntoMysqlDB).toBeCalledTimes(0);
});

test("insertIntoMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();
  const classroomID = generateUUID();

  const event = {
    body: JSON.stringify({
      templateID: templateID,
      classroomID: classroomID,
    }),
  };

  await createProject(event);

  expect(IS_OFFLINE).toBe(true);
  expect(insertIntoDynamoDB).toBeCalledTimes(0);
  expect(insertIntoMysqlDB).toBeCalledTimes(1);
});
