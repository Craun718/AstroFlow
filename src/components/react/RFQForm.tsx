import * as Label from '@radix-ui/react-label';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, User, Building2, Briefcase, Warehouse, Factory, Truck, Network, Wrench, Cpu, Calendar, Package } from 'lucide-react';

export default function RFQForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this to your backend
    console.log('Form submitted:', data);
    
    // Show success message
    alert('感谢您的咨询！我们将在24小时内与您联系。');
    form.reset();
  };

  return (
    <form className="space-y-6" id="rfq-form" onSubmit={handleSubmit} name="rfq-form">
      {/* Contact Information */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-teal-600 flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            联系信息
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              姓 <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              名 <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              电子邮箱 <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              电话号码 <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-3">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            公司信息
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              公司名称 <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="industry"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              所属行业 <span className="text-red-500">*</span>
            </Label.Root>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            >
              <option value="">选择行业</option>
              <option value="ecommerce">自然资源管理</option>
              <option value="healthcare">国土空间规划</option>
              <option value="automotive">矿山生态修复</option>
              <option value="technology">应急管理与防灾</option>
              <option value="consumer-goods">农村确权登记</option>
              <option value="food-beverage">生态环境保护</option>
              <option value="other">其他</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service Requirements */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-3">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            服务需求
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <Label.Root className="block text-sm font-medium text-gray-700 mb-3">
              所需服务 <span className="text-red-500">*</span>
            </Label.Root>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'warehousing', label: '遥感影像数据处理', icon: Warehouse },
                { id: 'manufacturing', label: '实景三维建设', icon: Factory },
                { id: 'transportation', label: 'AI智能监测', icon: Truck },
                { id: 'supply-chain', label: '自然资源确权', icon: Network },
                { id: 'value-added', label: '国土空间规划', icon: Wrench },
                { id: 'technology', label: '智慧应用开发', icon: Cpu },
              ].map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group"
                  >
                    <Checkbox.Root
                      id={service.id}
                      name="services"
                      value={service.id}
                      className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 transition-colors shrink-0"
                    >
                      <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-white" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <Label.Root
                      htmlFor={service.id}
                      className="text-sm font-medium text-gray-700 cursor-pointer flex-1 group-hover:text-gray-900 transition-colors"
                    >
                      {service.label}
                    </Label.Root>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label.Root
                htmlFor="timeline"
                className="flex items-center text-sm font-medium text-gray-700 mb-2"
              >
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                项目周期 <span className="text-red-500 ml-1">*</span>
              </Label.Root>
              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  required
                  className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white"
                >
                  <option value="">选择周期</option>
                  <option value="immediate">立即 (1个月内)</option>
                  <option value="1-3-months">1-3 个月</option>
                  <option value="3-6-months">3-6 个月</option>
                  <option value="6-plus-months">6个月以上</option>
                  <option value="flexible">灵活</option>
                </select>
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <Label.Root
                htmlFor="volume"
                className="flex items-center text-sm font-medium text-gray-700 mb-2"
              >
                <Package className="w-4 h-4 mr-2 text-gray-500" />
                预估数据量/项目规模
              </Label.Root>
              <div className="relative">
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  placeholder="例如：100平方公里 / 5000户"
                  className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <Label.Root
              htmlFor="details"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              项目详情 <span className="text-red-500">*</span>
            </Label.Root>
            <textarea
              id="details"
              name="details"
              rows={6}
              required
              placeholder="请详细描述您的需求，包括数据精度要求、覆盖范围、交付时间或其他相关信息..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2"
        >
          <span>提交咨询</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          提交表单即表示您同意我们的隐私政策和服务条款。
        </p>
      </div>
    </form>
  );
}

