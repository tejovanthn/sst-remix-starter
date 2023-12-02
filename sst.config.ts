import { SSTConfig } from "sst";
import { WebStack } from "./stacks/WebStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";

export default {
  config(_input) {
    return {
      name: "runboi",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
    .stack(AuthStack)
    .stack(ApiStack)
    .stack(WebStack)
  }
} satisfies SSTConfig;
