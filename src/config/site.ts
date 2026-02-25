// Site configuration
export const SITE = {
  title: "广西遥感空间信息科技有限公司",
  description:
    "专注于遥感影像数据生产、实景三维建设、自然资源监测与国土空间规划的高新技术企业。",
  url: "https://yourdomain.com",
  author: "广西遥感空间信息科技有限公司",
} as const;

export const NAVIGATION = [
  { name: "首页", href: "/" },
  { name: "核心能力", href: "/capabilities" },
  { name: "应用案例", href: "/use-cases" },
  { name: "关于我们", href: "/facilities" },
  { name: "公司公告", href: "/announcements" },
] as const;

export const SOCIAL_LINKS = {
  email: "mailto:gxygxxkj@163.com",
  gxrc: "https://www.gxrc.com/Company/db822a29-4822-4643-bca0-7aff2faed11e",
} as const;
