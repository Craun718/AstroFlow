// Constants used throughout the application

export const INDUSTRIES = [
  { id: 'natural-resources', name: '自然资源', icon: 'Tree' },
  { id: 'land-planning', name: '国土规划', icon: 'Map' },
  { id: 'emergency', name: '应急管理', icon: 'AlertTriangle' },
  { id: 'transportation', name: '交通运输', icon: 'Truck' },
  { id: 'agriculture', name: '农业林业', icon: 'Sprout' },
  { id: 'environment', name: '环保监测', icon: 'Leaf' },
] as const;

export const CAPABILITIES = [
  {
    id: 'remote-sensing',
    title: '遥感监测',
    description: '基于多源卫星影像的智能监测与分析服务。',
    icon: 'Satellite',
  },
  {
    id: '3d-modeling',
    title: '实景三维',
    description: '高精度实景三维模型建设与可视化平台。',
    icon: 'Box',
  },
  {
    id: 'data-platform',
    title: '数据中台',
    description: '自然资源大数据治理与AI智能分析中台。',
    icon: 'Database',
  },
  {
    id: 'smart-planning',
    title: '智慧规划',
    description: '国土空间规划一张图与实施监督系统。',
    icon: 'Map',
  },
  {
    id: 'registration',
    title: '确权登记',
    description: '房地一体与自然资源统一确权登记解决方案。',
    icon: 'FileText',
  },
] as const;

