import crypto from "crypto";
import { insertIntoDynamoDB } from "../insertIntoDynamoDB";
import Template from "../../../../models//template";
import { CONFIG_TEMPLATE_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("insertIntoDynamoDB is correctly called", async () => {
  utils.CONFIG_TEMPLATE_TABLE = "template";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();
  const name = "Test name";

  const template = new Template(templateID, name);

  const result = await insertIntoDynamoDB(template);

  expect(CONFIG_TEMPLATE_TABLE).toBe("template");
  expect(expected).toEqual(result);
});
