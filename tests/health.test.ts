import request from "supertest";
import { describe, expect, it } from "vitest";
import { buildApp } from "../src/app";

describe("健康检查", () => {
  it("返回运行状态", async () => {
    const response = await request(buildApp()).get("/healthz");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});
