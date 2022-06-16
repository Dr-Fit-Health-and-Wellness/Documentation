import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const spec = require("./members-openapi.yaml");

const ui = SwaggerUI({
  spec,
  dom_id: "#swagger",
  tryItOutEnabled: false,
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: "implicit",
});
