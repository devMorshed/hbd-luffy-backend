import app from "./app";

Bun.serve({
  port: process.env.PORT || 3000,
  hostname: "",
  fetch: app.fetch,
});
