import { useSession } from "sst/node/auth";

export default function handler(lambda) {
  return async function (event, context) {
    const session = useSession();

    if (session.type !== "user") {
      throw new Error("Not authenticated");
    }

    return await lambda(event, context);
  };
}