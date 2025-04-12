import { type OptionalAppConfigType, Yelix } from "jsr:@murat/yelix";
import endpoints from "./endpoints.ts";

export async function main(config?: OptionalAppConfigType) {
  // Port is 3030 by default
  const yelixConfig: OptionalAppConfigType = {
    environment: "dev",
  };

  const app = new Yelix(config || yelixConfig);

  // Load endpoints from the 'api' folder
  app.loadEndpoints(endpoints);

  await app.serve();
  return app;
}

if (import.meta.main) {
  await main();
}
