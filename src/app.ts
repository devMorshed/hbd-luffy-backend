import { Hono } from "hono";
import { logger } from "hono/logger";
import { testRoute } from "./routes/test";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", logger());

app.route("/api/v1/test", testRoute);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
