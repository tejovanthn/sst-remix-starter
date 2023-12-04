import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { useSession } from "sst/node/auth";
import { unauthenticated } from "./responses";

export default function handler(lambda: (event: APIGatewayProxyEvent, context: Context) => Promise<any>) {
  return async function (event, context) {
    const session = useSession();

    if (session.type !== "user") {
      return unauthenticated()
    }

    return await lambda(event, context);
  };
}