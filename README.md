# 可疑转账止付协同中枢

服务汇聚机构对可疑转账的止付、核验和释放事件，并通过事务与待投递表维持唯一结果。

## 技术约定

服务采用 Node.js 22、TypeScript 与 Express。HTTP 健康检查固定为 `GET /healthz`，业务错误使用结构化 JSON 返回。领域词汇和数据边界记录在 `docs/domain.md`，数据库结构位于 `db/`。

## 本地运行

```bash
docker compose up --build
```

镜像构建阶段会执行现有自动化测试。也可以运行 `scripts/verify.sh`，该脚本会先校验容器配置，再完成一次干净构建。

## 目录

- `src/`、`app/` 或 `cmd/`：服务入口与领域代码。
- `db/`：数据库迁移和约束。
- `fixtures/`：可公开的领域样例。
- `tests/`：可执行验证代码。
