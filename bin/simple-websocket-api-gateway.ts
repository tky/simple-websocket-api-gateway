import * as cdk from "aws-cdk-lib";
import { SimpleWebsocketApiGatewayStack } from "../lib/simple-websocket-api-gateway-stack";

const app = new cdk.App();
new SimpleWebsocketApiGatewayStack(
  app,
  "simple-websocket-api-gateway-stack",
  {}
);
