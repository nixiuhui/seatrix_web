
import { motion } from 'framer-motion';

// 数据来源：《Seatrix系列低频水声通信机应用模式指南》
const cases = [
  {
    image: "/images/app_edited.png",
    badge: "点对点模式",
    title: "水下仪器实时监测与远程遥控",
    desc: "广泛应用于海底工程建设、资源调查、腐蚀监测等场景，无需设备回收即可通过声学方式实时获取监测数据。同时在水面舰艇与潜艇通信、海上遥控等军事领域也有广泛应用。"
  },
  {
    image: "/images/OEM.jpg",
    badge: "组网模式",
    title: "水下多节点传感网络",
    desc: "可实现一对多及多对一水声节点通信，通过无线浮标将数据接入陆地立体信息网。可构建水声反潜网络、水下传感器网络、海洋监测网络等，实现真正意义上的全球覆盖。"
  },
  {
    image: "/images/IMG_20210203_094651.jpg",
    badge: "运动模式",
    title: "AUV/ROV移动载体实时控制",
    desc: "核心算法集成多普勒估计补偿技术，支持最大5节运动速度下的可靠通信。可搭载于AUV等水下移动载体，实现实时控制和双向数据传输，也可构建水下移动监测网。"
  }
];

export default function Applications() {
  return (
    <section id="cases" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            三大应用模式
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg font-light max-w-2xl mx-auto"
          >
            从点对点数据遥传，到多节点水下组网，再到高速移动平台控制，Seatrix系列覆盖水声通信全场景。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative bg-white">
                {/* Glow bar */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
                
                {/* 模式标签 */}
                <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100">{c.badge}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
