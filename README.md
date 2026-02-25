# AstroFlow - 物流与制造企业网站模板

一个现代化的、专业的 Astro.js 模板，专为物流、制造和供应链公司设计。基于 React、Tailwind CSS 和 TypeScript 构建。

![Astro](https://img.shields.io/badge/Astro-5.16.0-FF5D01?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)

## 🖼️ 预览

### 网站截图
<img alt="AstroFlow 网站预览" src="./public/AstroFlow - Astrojs Logistics & Manufacturing Website Template.png" />

### 性能与速度
<img alt="性能指标" src="./public/speed-metrics.png" />

## ✨ 特性

- 🚀 **基于 Astro 构建** - 快速、现代化的静态网站生成
- ⚛️ **React 组件** - 使用 React 构建交互式组件
- 🎨 **Tailwind CSS 4** - 现代化的实用优先样式设计
- 📱 **完全响应式** - 移动优先设计
- ♿ **无障碍访问** - 内置无障碍访问支持
- 🎯 **SEO 优化** - 元标签和语义化 HTML
- 🎭 **流畅动画** - 由 Motion 库提供支持
- 🎨 **现代 UI** - 精美的渐变设计和组件

## 📦 包含页面

- **首页** - 英雄区域、功能展示、统计数据、客户评价
- **核心能力** - 服务产品展示
- **应用案例** - 行业特定解决方案
- **关于我们** - 位置和设施信息
- **请求报价 (RFQ)** - 联系表单获取报价
- **文档** - 资源和指南

## 🚀 快速开始

### 前置要求

- Node.js 18+ 和 npm

### 安装

1. 克隆此仓库：
```bash
git clone https://github.com/yourusername/astroflow.git
cd astroflow
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:4321](http://localhost:4321)

## 📝 配置

### 网站配置

在 `src/config/site.ts` 中更新您的信息：

```typescript
export const SITE = {
  title: '您的公司名称', // TODO: 替换为您的公司名称
  description: '您的公司描述', // TODO: 更新为您的描述
  url: 'https://yourdomain.com', // TODO: 替换为您的实际域名
  author: '您的公司名称', // TODO: 替换为您的公司名称
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany', // TODO: 替换为您的 LinkedIn
  twitter: 'https://twitter.com/yourcompany', // TODO: 替换为您的 Twitter
  facebook: 'https://facebook.com/yourcompany', // TODO: 替换为您的 Facebook
} as const;
```

### 表单集成

RFQ 表单 (`src/components/react/RFQForm.tsx`) 目前将表单数据记录到控制台。要与后端集成：

1. **选项 1: 表单服务** (推荐用于静态网站)
   - 使用 [Formspree](https://formspree.io/)、[Netlify Forms](https://www.netlify.com/products/forms/) 或类似服务
   - 更新 `RFQForm.tsx` 中的 `handleSubmit` 函数

2. **选项 2: 自定义 API**
   - 创建 API 端点
   - 更新表单提交处理程序

使用 Formspree 的示例：
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  
  if (response.ok) {
    // 显示成功消息
  }
};
```

## 🛠️ 可用脚本

| 命令                | 操作                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | 安装依赖                            |
| `npm run dev`          | 启动本地开发服务器 `localhost:4321`     |
| `npm run build`        | 构建生产版本到 `./dist/`         |
| `npm run preview`      | 本地预览构建版本，部署前检查     |
| `npm run astro ...`    | 运行 CLI 命令如 `astro add`, `astro check` |

## 📁 项目结构

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # 图片和静态资源
│   ├── components/      # 可复用组件
│   │   ├── home/        # 首页组件
│   │   ├── react/       # React 交互组件
│   │   └── ui/          # UI 组件
│   ├── config/          # 配置文件
│   ├── layouts/         # 页面布局
│   ├── pages/           # Astro 页面 (路由)
│   ├── styles/          # 全局样式
│   └── utils/           # 工具函数
├── astro.config.mjs     # Astro 配置
├── package.json
└── tsconfig.json
```

## 🎨 自定义

### 颜色

模板使用 Tailwind CSS。在 `src/styles/global.css` 中自定义颜色或更新 Tailwind 配置。

### 图片

将 `src/assets/` 中的占位图片替换为您自己的图片。模板包含库存照片作为占位符。

### 内容

- 在组件文件中更新文本内容
- 在 `src/config/site.ts` 中修改导航
- 在 `src/pages/facilities.astro` 中更新设施信息
- 在 `src/components/home/Testimonials.astro` 中自定义客户评价

## 🚢 部署

### 构建生产版本

```bash
npm run build
```

这将创建一个包含您静态网站的 `dist/` 文件夹。

### 部署到 Vercel

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/astroflow)

### 部署到 Netlify

[![部署到 Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/astroflow)

### 其他平台

`dist/` 文件夹可以部署到任何静态托管服务：
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- 任何静态托管提供商

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。


## 🤝 贡献

欢迎贡献、问题报告和功能请求！请随时查看 [问题页面](https://github.com/yourusername/astroflow/issues)。

## ⭐ 支持我们

如果您觉得这个模板有用，请在 GitHub 上给它一个星标！

## 📧 支持

如有问题或需要支持，请在 GitHub 上提交问题。

---

使用 ❤️ 和 [Astro](https://astro.build) 构建
