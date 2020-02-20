import { createUser } from "../createUser";
import { connect } from "../../connect";

jest.mock("../../connect.js");

test("Correctly creates user", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const email = "test@gmail.com";

  const event = JSON.stringify({
    body: {
      email: email
    }
  });

  const result = await createUser(event);

  expect(result).toEqual(expected);
});
