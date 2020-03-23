import crypto from "crypto";
import { updateClassroom } from "../updateClassroom";
import { IS_OFFLINE } from "../../../utils";
import * as utils from "../../../utils";

jest.mock("../updateMysqlDB.js");
jest.mock("../updateDynamoDB.js");

import { updateMysqlDB } from "../updateMysqlDB";
import { updateDynamoDB } from "../updateDynamoDB";

const expected = { statusCode: 200 };

beforeEach(() => {
  updateDynamoDB.mockReturnValue(expected);
  updateMysqlDB.mockReturnValue(expected);
});

afterEach(() => {
  updateDynamoDB.mockReset();
  updateMysqlDB.mockReset();
});

test("Correctly updates classroom", async () => {
  utils.IS_OFFLINE = true;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const ownerID = generateUUID();

  const event = {
    pathParameters: { id: id },
    body: JSON.stringify({
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    })
  };

  const result = await updateClassroom(event);

  expect(IS_OFFLINE).toBe(true);
  expect(result).toEqual(expected);
});

test("updateDynamoDB is called", async () => {
  utils.IS_OFFLINE = false;

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const ownerID = generateUUID();

  const event = {
    pathParameters: { id: id },
    body: JSON.stringify({
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    })
  };

  await updateClassroom(event);

  expect(IS_OFFLINE).toBe(false);
  expect(updateDynamoDB).toBeCalledTimes(1);
  expect(updateMysqlDB).toBeCalledTimes(0);
});

test("updateMysqlDB is called", async () => {
  utils.IS_OFFLINE = true;
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const id = generateUUID();
  const ownerID = generateUUID();

  const event = {
    pathParameters: { id: id },
    body: JSON.stringify({
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    })
  };

  await updateClassroom(event);

  expect(IS_OFFLINE).toBe(true);
  expect(updateDynamoDB).toBeCalledTimes(0);
  expect(updateMysqlDB).toBeCalledTimes(1);
});
