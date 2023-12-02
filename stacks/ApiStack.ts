import { Auth, Api as SSTApi, StackContext, use } from "sst/constructs";
import { AuthStack } from "./AuthStack";

export function ApiStack({ stack }: StackContext) {
  const { auth } = use(AuthStack)
  const api = new SSTApi(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/time.main",
    },
    cors: {
      allowCredentials: true,
      allowHeaders: ["content-type"],
      allowMethods: ["ANY"],
      allowOrigins: ["http://localhost:3000"],
    }
  });

  auth.attach(stack, { api });

  stack.addOutputs({
    ApiUrl: api.url,
  })
  return {
    api
  }
}