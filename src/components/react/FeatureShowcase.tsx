import { motion } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones, Globe, Map, Database, FileText, Activity, Layers } from 'lucide-react';

import warehouseImg from '@assets/photo-1553413077-190dd305871c.jpg';
import truckImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';

const features = [
  {
    icon: Globe,
    title: '实景三维智能可视化',
    description: '构建地形级与城市级三维模型，打造地理信息数据底座。',
    image: warehouseImg,
  },
  {
    icon: Activity,
    title: '遥感智能监测',
    description: '基于卫星影像与AI技术，实现自然资源变化自动检测。',
    image: truckImg,
  },
  {
    icon: Layers,
    title: '数据生产平台',
    description: '高效处理原始影像，快速生产高精度遥感数据产品。',
    image: packageImg,
  },
  {
    icon: FileText,
    title: '自然资源确权',
    description: '提供房地一体与自然资源统一确权登记全流程解决方案。',
    image: barChart3Img,
  },
  {
    icon: Map,
    title: '国土空间规划',
    description: '构建国土空间规划一张图，辅助科学决策与实施监督。',
    image: shieldImg,
  },
  {
    icon: Database,
    title: '智慧应用服务',
    description: '服务于应急、环保、交通等多个行业的智慧化应用。',
    image: headphonesImg,
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

