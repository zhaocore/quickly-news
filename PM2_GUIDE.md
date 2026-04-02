# PM2 部署指南

## 安装 PM2

```bash
npm install -g pm2
```

## PM2 命令使用

### 启动应用

```bash
# 使用配置文件启动
npm run pm2:start

# 或直接使用 PM2
pm2 start ecosystem.config.cjs
```

### 管理应用

```bash
# 停止应用
npm run pm2:stop

# 重启应用
npm run pm2:restart

# 重载应用（0秒停机）
npm run pm2:reload

# 删除应用
npm run pm2:delete

# 查看日志
npm run pm2:logs

# 实时监控
npm run pm2:monit

# 查看状态
npm run pm2:status
```

### 开机自启动

```bash
# 保存当前进程列表
pm2 save

# 生成启动脚本
pm2 startup

# 按照提示执行命令（通常需要 sudo）
```

### 查看日志

```bash
# 实时查看所有日志
pm2 logs news_quickly

# 查看错误日志
pm2 logs news_quickly --err

# 查看输出日志
pm2 logs news_quickly --out

# 清空日志
pm2 flush
```

## 配置说明

配置文件位于 `ecosystem.config.cjs`，主要配置项：

- **name**: 应用名称 `news_quickly`
- **script**: 启动脚本路径 `dist/output/server/index.mjs`
- **interpreter**: Node.js 解释器
- **node_args**: Node.js 参数，使用 `--env-file .env.server` 加载环境变量
- **instances**: 实例数量（1 = 单实例，或设置为 `max` 使用所有 CPU 核心）
- **exec_mode**: 执行模式（cluster 集群模式）
- **max_memory_restart**: 内存超过 500M 自动重启
- **autorestart**: 自动重启
- **watch**: 文件监控（生产环境建议关闭）
- **error_file/out_file**: 日志文件路径

## 部署流程

```bash
# 1. 构建项目
npm run build

# 2. 启动 PM2
npm run pm2:start

# 3. 查看状态
npm run pm2:status

# 4. 查看日志确认运行正常
npm run pm2:logs
```

## 注意事项

1. 确保 `.env.server` 文件存在且配置正确
2. 确保已运行 `npm run build` 构建项目
3. 日志文件保存在 `./logs/` 目录
4. 使用 cluster 模式可以充分利用多核 CPU
5. 定期查看日志文件大小，必要时清理
