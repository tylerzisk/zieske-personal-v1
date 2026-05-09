// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "tyler-personal-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("TylerPersonalSite", {
      domain: {
        name: "tylerzieske.com",
        aliases: ["www.tylerzieske.com"],
        cert: "arn:aws:acm:us-east-1:211125722258:certificate/5f1d33b7-b6e8-4c2d-9e14-c53966538ecb",
        dns: false,
      },
    });
  },
});
