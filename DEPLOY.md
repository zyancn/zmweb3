# 部署指南

本文档提供了如何将ZMWeb3项目部署到Vercel和Cloudflare Pages的详细说明。

## 环境变量配置

在部署前，请确保在部署平台上设置以下环境变量：

- `VITE_RPC_URL`: Arbitrum网络RPC节点URL
- `VITE_USDT_CONTRACT`: Arbitrum网络上的USDT合约地址
- `VITE_PAYMENT_ADDRESS`: 支付收款地址
- `VITE_DEV_MODE`: 开发模式设置（true/false）
- `VITE_DOWNLOAD_URL_COURSE1`: 区块链入门教程下载链接
- `VITE_DOWNLOAD_URL_COURSE2`: 交易所返佣攻略下载链接
- `VITE_DOWNLOAD_URL_COURSE3`: Web3营销指南下载链接
- `VITE_WECHAT_QR_URL`: 微信二维码图片URL
- `VITE_TELEGRAM_QR_URL`: Telegram二维码图片URL

## Vercel部署

### 方法一：使用Vercel CLI

1. 安装Vercel CLI
```bash
npm install -g vercel
```

2. 登录Vercel
```bash
vercel login
```

3. 在项目根目录下运行部署命令
```bash
vercel
```

4. 按照提示完成部署配置

### 方法二：通过GitHub仓库部署

1. 将项目推送到GitHub仓库

2. 在Vercel控制台中，点击"New Project"

3. 导入GitHub仓库

4. 配置项目：
   - 构建命令：`npm run build`
   - 输出目录：`dist`
   - 框架预设：`Vite`

5. 在"Environment Variables"部分添加所有必要的环境变量

6. 点击"Deploy"开始部署

## Cloudflare Pages部署

1. 登录Cloudflare控制台

2. 进入"Pages"部分

3. 点击"Create a project"

4. 连接GitHub仓库

5. 配置构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
   - 构建系统版本：选择最新版本

6. 在"Environment variables"部分添加所有必要的环境变量

7. 点击"Save and Deploy"

## 部署后验证

部署完成后，请验证以下功能：

1. 所有页面路由是否正常工作
2. 支付功能是否正常
3. 环境变量是否正确加载
4. 图片和资源是否正确显示

## 常见问题解决

### 路由问题

如果部署后出现路由问题（刷新页面出现404），请确认：

- Vercel: 已正确配置`vercel.json`文件
- Cloudflare Pages: 已正确配置`_redirects`文件

### 环境变量问题

如果环境变量未正确加载，请检查：

- 变量名称是否正确（必须以`VITE_`开头）
- 变量值是否正确设置
- 是否需要重新部署以应用新的环境变量

### 构建失败

如果构建失败，请检查构建日志，常见原因包括：

- Node.js版本不兼容（建议使用Node.js 18+）
- 依赖安装失败
- 构建脚本错误

## 自定义域名设置

### Vercel

1. 在项目设置中，进入"Domains"部分
2. 添加您的自定义域名
3. 按照Vercel提供的说明更新DNS记录

### Cloudflare Pages

1. 在项目设置中，进入"Custom domains"部分
2. 添加您的自定义域名
3. 由于已在Cloudflare上，DNS记录将自动配置