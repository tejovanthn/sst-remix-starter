import { AuthHandler, GoogleAdapter, Session } from "sst/node/auth";

declare module "sst/node/auth" {
  export interface SessionTypes {
    user: {
      userID: string;
      // For a multi-tenant setup
      // tenantID: string
    };
  }
}

export const main = AuthHandler({
  providers: {
    google: GoogleAdapter({
      mode: "oidc",
      clientID: "XXXX",
      onSuccess: async (tokenset) => {
        const claims = tokenset.claims()
        const user = {
          userID: "test"
        }

        return Session.cookie({
          redirect: "https://example.com",
          type: "user",
          properties: {
            userID: user.userID,
          },
        });
      }
    }),
  },
});