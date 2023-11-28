import { RemixSite, StackContext } from "sst/constructs";

export function Web({ stack }: StackContext) {
  // Create the Remix site
  const site = new RemixSite(stack, "RunBoiWeb", {
    path: "packages/web/",
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url ?? "localhost",
  });
}