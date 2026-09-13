import express, { Express } from "express";

export function buildApp(): Express {
  const app = express();
  app.use(express.json());
  app.get("/healthz", (_request, response) => {
    response.json({ status: "ok", service: "q012-risk-gateway" });
  });
  return app;
}

if (require.main === module) {
  buildApp().listen(Number(process.env.PORT ?? 8080), "0.0.0.0");
}
