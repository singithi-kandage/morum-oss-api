import { connect } from "../connect";

jest.mock("../connect.js");

test("Correctly connects", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const query = "testQuery";

  const result = await connect(query);

  expect(result).toEqual(expected);
});
