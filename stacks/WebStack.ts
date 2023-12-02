import { RemixSite, StackContext, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebStack({ stack }: StackContext) {
  const { api } = use(ApiStack)
  // Create the Remix site
  const site = new RemixSite(stack, "RunBoiWeb", {
    path: "packages/web/",
    bind: [api],
  });


  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url ?? "localhost",
  });
  return {
    site
  }
}