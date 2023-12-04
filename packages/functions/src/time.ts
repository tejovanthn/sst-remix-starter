import { ApiHandler } from "sst/node/api";
import protect from "@runboi/core/protect";
import { success } from "@runboi/core/responses";

export const main = ApiHandler(
  // protect(
    async (event) => {
      return success({time: event.requestContext.time})
    }
  // )
);