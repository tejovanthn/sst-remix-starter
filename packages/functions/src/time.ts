import handler from "@runboi/core/handler";
import protect from "@runboi/core/protect";

export const main = handler(
  // protect(
    async (event) => {
      return { time: event.requestContext.time }
    }
  // )
);