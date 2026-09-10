const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

// Let Swagger UI infer the host/scheme from the incoming request instead of
// the values baked into swagger.json at generation time (which are only
// correct for whichever environment the file happened to be generated in).
delete swaggerDocument.host;
delete swaggerDocument.schemes;

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/users", require("./users"));

module.exports = router;