import * as debug from "./debug";

export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    // Start debugger
    debug.init(event);

    try {
      // Run the Lambda
      body = await lambda(event, context);
      console.log({body})
      statusCode = 200;
    } catch (e) {
      // Print debug messages
      debug.flush(e);

      if(e.message === "Not authenticated") {
        statusCode = 401;
      } else {
        statusCode = 500;
      }

      body = { error: e.message };
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  };
}