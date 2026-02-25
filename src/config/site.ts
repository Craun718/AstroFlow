// Site configuration
export const SITE = {
  title: '广西遥感空间信息科技有限公司',
  description: '专注于遥感影像数据生产、实景三维建设、自然资源监测与国土空间规划的高新技术企业。',
  url: 'https://yourdomain.com',
  author: '广西遥感空间信息科技有限公司',
} as const;

export const NAVIGATION = [
  { name: '首页', href: '/' },
  { name: '核心能力', href: '/capabilities' },
  { name: '应用案例', href: '/use-cases' },
  { name: '关于我们', href: '/facilities' },
  { name: '联系我们', href: '/rfq' },
  { name: '文档中心', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

