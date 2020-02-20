import { createClassroom } from "../createClassroom";
import { connect } from "../../connect";
const crypto = require("crypto");

jest.mock("../../connect.js");

test("Correctly creates classroom", async () => {
  const expected = { statusCode: 200 };
  connect.mockReturnValue(expected);

  const generateUUID = () => crypto.randomBytes(16).toString("hex");
  const ownerID = generateUUID();

  const event = JSON.stringify({
    body: {
      ownerID: ownerID,
      courseCode: "PROG2300",
      company: "Conestoga College"
    }
  });

  const result = await createClassroom(event);

  expect(result).toEqual(expected);
});
