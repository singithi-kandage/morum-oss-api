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
    let body = JSON.stringify({});

    if (query.includes("SELECT")) {
      body = JSON.stringify(results);
    }

    // Run clean up function
    await mysql.end();

    return {
      statusCode: 200,
      body: body
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};

export default { connect };
