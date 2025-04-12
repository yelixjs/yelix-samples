import { Yelix } from "jsr:@murat/yelix";
import * as path from "jsr:@std/path@1.0.8";

export async function main() {
  // Port is 3030 by default
  const app = new Yelix();

  // Load endpoints from a 'api' folder
  const currentDir = Deno.cwd();
  const API_Folder = path.join(currentDir, "api");
  await app.loadEndpointsFromFolder(API_Folder);

  app.serve();

  return app;
}

await main();
