const mysql = require("serverless-mysql")({
  config: {
    host: process.env.ENDPOINT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  }
});

module.exports.connect = async query => {
  try {
    // Run query
    let results = await mysql.query(query);

    // Run clean up function
    await mysql.end();

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (e) {
    return {
      error: e,
      statusCode: 500
    };
  }
};
