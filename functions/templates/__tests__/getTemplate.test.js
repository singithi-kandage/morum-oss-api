import crypto from "crypto";
import { getTemplate } from "../getTemplate";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly gets template", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const templateID = generateUUID();

  const event = JSON.stringify({
    pathParameters: templateID
  });

  const result = await getTemplate(event);

  expect(result).toEqual(expected);
});
