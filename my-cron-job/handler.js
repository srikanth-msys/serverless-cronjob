const https = require("https")

module.exports.hello = async (event, context, callback) => {
  const data = JSON.stringify({ name: "Ahoy! Serverless Rocks!!" })

  const options = {
    hostname: "en35x9nb9ltnu.x.pipedream.net",
    port: 443,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  try {
    const req = https.request(options);
    req.write(data);
    callback(null, { message: 'We ran your scheduled job', body });
    req.end();
  } catch (err) {
    callback(true, err);
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

};
