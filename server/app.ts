import { Hono } from "hono";
import { logger } from "hono/logger";
import { testRoute } from "./routes/test";

const app = new Hono();

app.use("*", logger());

app.route("/api/v1/test", testRoute);

export default app;
