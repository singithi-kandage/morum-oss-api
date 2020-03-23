import crypto from "crypto";
import { createClassroom } from "../createClassroom";
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

test("Correctly creates classroom", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const ownerID = generateUUID();

  const event = {
    body: JSON.stringify({
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    })
  };

  const result = await createClassroom(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("insertIntoDynamoDB is called", async () => {
  utils.IS_OFFLINE = false;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const ownerID = generateUUID();

  const event = {
    body: JSON.stringify({
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    })
  };

  await createClassroom(event);

  expect(IS_OFFLINE).toBe(false);
  expect(insertIntoDynamoDB).toBeCalledTimes(1);
  expect(insertIntoMysqlDB).toBeCalledTimes(0);
});

test("insertIntoMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const ownerID = generateUUID();

  const event = {
    body: JSON.stringify({
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    })
  };

  await createClassroom(event);

  expect(IS_OFFLINE).toBe(true);
  expect(insertIntoDynamoDB).toBeCalledTimes(0);
  expect(insertIntoMysqlDB).toBeCalledTimes(1);
});
