import AWS from "aws-sdk";
import {
  CONFIG_PROJECT_TABLE,
  CONFIG_S3_BUCKET,
  ReturnDocumentClient,
} from "../../utils";

const documentClient = ReturnDocumentClient();

// get reference to S3 client
const s3 = new AWS.S3();

export const insertIntoDynamoDB = async (project) => {
  // S3 Bucket operation
  let uploadURL = "";
  const s3Params = {
    Bucket: CONFIG_S3_BUCKET,
    Key: project.projectID,
    ContentType: "application/x-gzip",
    ACL: "public-read",
  };

  try {
    uploadURL = s3.getSignedUrl("putObject", s3Params);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: e.message }),
    };
  }

  // DynamoDB operation
  const params = {
    TableName: CONFIG_PROJECT_TABLE,
    Item: {
      projectID: project.projectID,
      containerID: project.containerID,
      templateID: project.templateID,
      classroomID: project.classroomID,
    },
    ConditionExpression: "attribute_not_exists(id)", // ensures that duplicate ids cannot be stored
  };

  try {
    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify({ uploadUrl: uploadURL }),
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: e.message }),
    };
  }
};

export default { insertIntoDynamoDB };
