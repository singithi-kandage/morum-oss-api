import { createTemplate } from "../createTemplate";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly creates template", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const name = "testTemplate";

  const event = JSON.stringify({
    body: {
      name: name
    }
  });

  const result = await createTemplate(event);

  expect(result).toEqual(expected);
});
