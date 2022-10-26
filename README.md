# simple websocket api gateway

Very simple project to use websocket via api gateway.

## Useful commands

- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk watch --hotswap` deploy the lambda function on changing automatically

```
% wscat -c wss://{YOUR_API_ID}.execute-api.ap-northeast-1.amazonaws.com/dev
Connected (press CTRL+C to quit)
> wow
< wow wow
>
```

## Thanks

- https://zenn.dev/keshihoriuchi/articles/f1ae0d614b0f6f
- https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/api-websocket-lambda-dynamodb
