import crypto from "crypto";
import { getFromDynamoDB } from "../getFromDynamoDB";
import { CONFIG_TEMPLATE_TABLE } from "../../../utils";
import * as utils from "../../../utils";

test("getFromDynamoDB is correctly called", async () => {
  utils.CONFIG_TEMPLATE_TABLE = "template";

  const expected = { statusCode: 500 };

  // Generate unique id with no external dependencies
  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const result = await getFromDynamoDB(templateID);

  expect(CONFIG_TEMPLATE_TABLE).toBe("template");
  expect(expected).toEqual(result);
});
