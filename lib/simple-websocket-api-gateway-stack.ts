import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { WebSocketLambdaIntegration } from "@aws-cdk/aws-apigatewayv2-integrations-alpha";
import { WebSocketApi, WebSocketStage } from "@aws-cdk/aws-apigatewayv2-alpha";

export class SimpleWebsocketApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new NodejsFunction(this, "handler", {
      functionName: "simple-websocket-api-gateway-handler",
    });

    const webSocketApi = new WebSocketApi(this, "websocket-api", {
      defaultRouteOptions: {
        integration: new WebSocketLambdaIntegration(
          "default-integration",
          handler
        ),
      },
    });

    const stage = new WebSocketStage(this, "stage", {
      webSocketApi,
      stageName: "dev",
      autoDeploy: true,
    });

    const wsManageConnPolicy = new PolicyStatement({
      actions: ["execute-api:ManageConnections"],
      resources: [
        this.formatArn({
          service: "execute-api",
          resourceName: `${stage.stageName}/POST/*`,
          resource: webSocketApi.apiId,
        }),
      ],
    });
    handler.addToRolePolicy(wsManageConnPolicy);
  }
}
