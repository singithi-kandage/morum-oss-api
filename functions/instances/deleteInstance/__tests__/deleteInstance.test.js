import { deleteInstance } from "../deleteInstance";
import { IS_OFFLINE } from "../../../utils";
import * as utils from "../../../utils";

jest.mock("../deleteFromMysqlDB.js");
jest.mock("../deleteFromDynamoDB.js");

import crypto from "crypto";
import { deleteFromMysqlDB } from "../deleteFromMysqlDB";
import { deleteFromDynamoDB } from "../deleteFromDynamoDB";

const expected = { statusCode: 200 };

beforeEach(() => {
  deleteFromDynamoDB.mockReturnValue(expected);
  deleteFromMysqlDB.mockReturnValue(expected);
});

afterEach(() => {
  deleteFromDynamoDB.mockReset();
  deleteFromMysqlDB.mockReset();
});

test("Correctly deletes instance", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const event = {
    pathParameters: { id: instanceID }
  };

  const result = await deleteInstance(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("deleteFromDynamoDB is called", async () => {
  utils.IS_OFFLINE = false;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const event = {
    pathParameters: { id: instanceID }
  };

  await deleteInstance(event);

  expect(IS_OFFLINE).toBe(false);
  expect(deleteFromDynamoDB).toBeCalledTimes(1);
  expect(deleteFromMysqlDB).toBeCalledTimes(0);
});

test("deleteFromMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const instanceID = generateUUID();

  const event = {
    pathParameters: { id: instanceID }
  };

  await deleteInstance(event);

  expect(IS_OFFLINE).toBe(true);
  expect(deleteFromDynamoDB).toBeCalledTimes(0);
  expect(deleteFromMysqlDB).toBeCalledTimes(1);
});
