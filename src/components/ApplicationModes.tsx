import { motion } from 'framer-motion';
import { ArrowLeftRight, Radio, Network, Gauge } from 'lucide-react';

/* 四种应用模式数据，来源：Seatrix系列低频水声通信机应用模式.htm */
const modes = [
  {
    icon: <ArrowLeftRight className="w-8 h-8 text-blue-500" />,
    badge: '模式一',
    title: '点对点通信',
    subtitle: '最简单、直接的双向数据链路',
    desc: '两台 Seatrix 水声通信机建立一对一无线水声链路，实现双向透明数据传输。典型场景包括水下仪器数据回收、潜水员与母船通信、AUV实时遥控等，部署即用，无需复杂配置。',
    tags: ['水下仪器数据回收', 'AUV 遥控', '潜水员通信'],
    color: 'blue',
  },
  {
    icon: <Radio className="w-8 h-8 text-emerald-500" />,
    badge: '模式二',
    title: '网关模式',
    subtitle: '水面基站 ↔ 水下节点数据桥接',
    desc: '将一台 Seatrix 安装于水面浮标或船只作为网关节点，与多台水下子节点建立星型网络。水面网关负责汇聚水下数据并通过 Wi-Fi / 4G / 卫星上传云端，实现水下数据的实时远程监控。',
    tags: ['海洋环境监测', '水下传感器阵列', '实时远程回传'],
    color: 'emerald',
  },
  {
    icon: <Network className="w-8 h-8 text-purple-500" />,
    badge: '模式三',
    title: '组网模式',
    subtitle: '多节点自组织水声传感器网络',
    desc: '多台 Seatrix 通过网络级地址配置，自组织形成水下 Ad-hoc 网络。数据可逐跳转发、汇聚，真正构建覆盖大范围海域的立体水声信息网，可用于水声反潜网络、海洋水文监测、水下物联网等。',
    tags: ['水下物联网', '大范围海域覆盖', '多跳数据中继'],
    color: 'purple',
  },
  {
    icon: <Gauge className="w-8 h-8 text-orange-500" />,
    badge: '模式四',
    title: '运动模式',
    subtitle: '移动载体下的高可靠通信',
    desc: '核心算法集成多普勒估计补偿技术，最高支持 5 节（约 2.6 m/s）运动速度下的稳定通信，同时提供实时测速与测距功能。完美适配 AUV、水下滑翔机、ROV 等高动态移动平台的数据传输需求。',
    tags: ['AUV / ROV', '水下滑翔机', '多普勒补偿'],
    color: 'orange',
  },
];

/* 色彩映射 */
const colorMap: Record<string, { badge: string; icon: string; tag: string; ring: string }> = {
  blue:    { badge: 'bg-blue-50 text-blue-700',    icon: 'bg-blue-50 border-blue-100',    tag: 'bg-blue-50 text-blue-600',    ring: 'group-hover:ring-blue-200' },
  emerald: { badge: 'bg-emerald-50 text-emerald-700', icon: 'bg-emerald-50 border-emerald-100', tag: 'bg-emerald-50 text-emerald-700', ring: 'group-hover:ring-emerald-200' },
  purple:  { badge: 'bg-purple-50 text-purple-700',  icon: 'bg-purple-50 border-purple-100',  tag: 'bg-purple-50 text-purple-700',  ring: 'group-hover:ring-purple-200' },
  orange:  { badge: 'bg-orange-50 text-orange-700',  icon: 'bg-orange-50 border-orange-100',  tag: 'bg-orange-50 text-orange-700',  ring: 'group-hover:ring-orange-200' },
};

export default function ApplicationModes() {
  return (
    <section id="modes" className="py-24 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 opacity-60" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* 标题区 */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5"
          >
            <span className="text-blue-700 font-medium text-sm tracking-wide">灵活部署，按需组合</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight"
          >
            四种应用模式
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            从简单点对点链路到覆盖广域海域的自组织网络，Seatrix2000 可灵活适配各类水下作业场景。
          </motion.p>
        </div>

        {/* 模式卡片：2×2 网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modes.map((mode, i) => {
            const c = colorMap[mode.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-transparent ${c.ring} relative overflow-hidden`}
              >
                {/* 序号badge */}
                <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-5 ${c.badge}`}>
                  {mode.badge}
                </span>

                {/* 图标 + 标题行 */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    {mode.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">{mode.title}</h3>
                    <p className="text-sm text-slate-400 mt-0.5">{mode.subtitle}</p>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{mode.desc}</p>

                {/* 场景标签 */}
                <div className="flex flex-wrap gap-2">
                  {mode.tags.map((tag, ti) => (
                    <span key={ti} className={`px-3 py-1 rounded-full text-xs font-medium ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 悬停底部光晕 */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
