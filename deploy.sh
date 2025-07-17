#!/bin/bash

# 部署脚本 - 用于构建和部署ZMWeb3项目

echo "===== ZMWeb3项目部署脚本 ====="
echo "请选择部署平台:"
echo "1. Vercel"
echo "2. Cloudflare Pages"
read -p "请输入选项 (1/2): " platform

# 安装依赖
echo "\n正在安装依赖..."
npm install

# 构建项目
echo "\n正在构建项目..."
npm run build

if [ $? -ne 0 ]; then
  echo "\n构建失败，请检查错误信息"
  exit 1
fi

echo "\n构建成功!"

case $platform in
  1)
    echo "\n准备部署到Vercel..."
    # 检查是否安装了Vercel CLI
    if ! command -v vercel &> /dev/null; then
      echo "Vercel CLI未安装，正在安装..."
      npm install -g vercel
    fi
    
    echo "\n使用Vercel CLI部署..."
    vercel --prod
    ;;
    
  2)
    echo "\n准备部署到Cloudflare Pages..."
    echo "请按照以下步骤手动部署到Cloudflare Pages:"
    echo "1. 登录Cloudflare控制台: https://dash.cloudflare.com/"
    echo "2. 进入Pages部分"
    echo "3. 创建新项目或选择现有项目"
    echo "4. 上传dist目录内容或连接Git仓库"
    echo "5. 设置构建命令: npm run build"
    echo "6. 设置构建输出目录: dist"
    echo "7. 添加必要的环境变量"
    
    read -p "是否需要将dist目录压缩为zip文件以便上传? (y/n): " zip_option
    if [ "$zip_option" = "y" ]; then
      echo "\n正在创建dist.zip..."
      cd dist && zip -r ../dist.zip * && cd ..
      echo "已创建dist.zip文件，可以直接上传到Cloudflare Pages"
    fi
    ;;
    
  *)
    echo "\n无效选项，部署取消"
    exit 1
    ;;
esac

echo "\n===== 部署流程完成 ====="