# ZM Web3 项目

基于React和Vite构建的Web3项目，支持Arbitrum网络上的USDT支付验证。

## 环境变量配置

项目使用`.env`文件进行配置，支持以下环境变量：

- `VITE_RPC_URL`: Arbitrum网络RPC节点URL
- `VITE_USDT_CONTRACT`: Arbitrum网络上的USDT合约地址
- `VITE_PAYMENT_ADDRESS`: 支付收款地址
- `VITE_DEV_MODE`: 开发模式设置（true/false）
- `VITE_DOWNLOAD_URL_COURSE1`: 区块链入门教程下载链接
- `VITE_DOWNLOAD_URL_COURSE2`: 交易所返佣攻略下载链接
- `VITE_DOWNLOAD_URL_COURSE3`: Web3营销指南下载链接
- `VITE_WECHAT_QR_URL`: 微信二维码图片URL
- `VITE_TELEGRAM_QR_URL`: Telegram二维码图片URL

### 开发模式特性

当`VITE_DEV_MODE=true`时：

- 允许使用测试交易ID（0x1234567890123456789012345678901234567890123456789012345678901234）
- 自动创建模拟交易收据和转账日志，便于测试支付流程

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 技术栈

- React
- Vite
- ethers.js - 用于与以太坊区块链交互
- QRCode - 用于生成支付二维码

## 部署指南

本项目已配置好用于Vercel和Cloudflare Pages的部署文件。详细部署步骤请参考 [DEPLOY.md](./DEPLOY.md) 文件。

### 快速部署

使用部署脚本快速构建和部署项目：

```bash
# 添加执行权限
chmod +x deploy.sh

# 运行部署脚本
./deploy.sh
```

### Vercel部署

项目已包含`vercel.json`配置文件，可以直接部署到Vercel：

```bash
vercel
```

### Cloudflare Pages部署

项目已包含`_redirects`和`_headers`文件，可以直接部署到Cloudflare Pages。

## 注意事项

- 部署前请确保已正确设置所有环境变量
- 生产环境中已配置移除控制台日志
- 请确保API密钥和私钥不会被提交到代码仓库
