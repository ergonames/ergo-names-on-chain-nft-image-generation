const serverless = require("serverless-http");

const binaryMimeTypes = [
  "image/svg+xml",
];

const app = require("./app");
module.exports.handler = serverless(app, {
  binary: binaryMimeTypes,
});