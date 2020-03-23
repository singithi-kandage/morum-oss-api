import {
  CONFIG_MYSQL_ENDPOINT,
  CONFIG_MYSQL_DATABASE,
  CONFIG_MYSQL_USER,
  CONFIG_MYSQL_PASSWORD
} from "./utils";

const mysql = require("serverless-mysql")({
  config: {
    host: CONFIG_MYSQL_ENDPOINT,
    database: CONFIG_MYSQL_DATABASE,
    user: CONFIG_MYSQL_USER,
    password: CONFIG_MYSQL_PASSWORD
  }
});

export const connect = async query => {
  try {
    // Run query
    const results = await mysql.query(query);

    // Run clean up function
    await mysql.end();

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};

export default { connect };
