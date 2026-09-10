const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "User API",
    description: "User API.",
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
