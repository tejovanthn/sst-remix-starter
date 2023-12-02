import { Auth, StackContext } from "sst/constructs";

export function AuthStack({stack}: StackContext) {
    const auth = new Auth(stack, "auth", {
        authenticator: {
          handler: "packages/functions/src/auth.main",
        },
      });
      return {
        auth
      }
}