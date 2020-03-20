import { getTemplate } from "../getTemplate";
import { IS_OFFLINE } from "../../../utils";
import * as utils from "../../../utils";

jest.mock("../getFromMysqlDB.js");
jest.mock("../getFromDynamoDB.js");

import crypto from "crypto";
import { getFromMysqlDB } from "../getFromMysqlDB";
import { getFromDynamoDB } from "../getFromDynamoDB";

const expected = { statusCode: 200, body: JSON.stringify({ test: "test" }) };

beforeEach(() => {
  getFromDynamoDB.mockReturnValue(expected);
  getFromMysqlDB.mockReturnValue(expected);
});

afterEach(() => {
  getFromDynamoDB.mockReset();
  getFromMysqlDB.mockReset();
});

test("Correctly gets classroom", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const event = JSON.stringify({
    pathParameters: templateID
  });

  const result = await getTemplate(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("getFromDynamoDB is called", async () => {
  utils.IS_OFFLINE = false;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const event = JSON.stringify({
    pathParameters: templateID
  });

  await getTemplate(event);

  expect(IS_OFFLINE).toBe(false);
  expect(getFromDynamoDB).toBeCalledTimes(1);
  expect(getFromMysqlDB).toBeCalledTimes(0);
});

test("getFromMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const event = JSON.stringify({
    pathParameters: templateID
  });

  await getTemplate(event);

  expect(IS_OFFLINE).toBe(true);
  expect(getFromDynamoDB).toBeCalledTimes(0);
  expect(getFromMysqlDB).toBeCalledTimes(1);
});
