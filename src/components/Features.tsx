import { motion } from 'framer-motion';
import { Shield, Zap, Target, Cpu, Activity, LayoutDashboard } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: '先进多路径抑制',
    desc: '可适应信道强起伏环境，无论是复杂浅海还是开阔深海，均能保持稳定通信。',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: '超低能量损耗',
    desc: '优化的硬件与协议设计，大幅度降低长期水下部署的能源消耗，延长工作周期。',
  },
  {
    icon: <Target className="w-8 h-8 text-rose-500" />,
    title: '高多普勒容限',
    desc: '最大支持 ±12m/s 的相对运动多普勒容限，完美适应移动平台如AUV/ROV。',
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
    title: '内置测距与测速',
    desc: '不仅仅是通信，更集成了相对速度测量与精确测距功能，一机多用。',
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
    title: '透明串口集',
    desc: '配备带有先进命令集的透明串口界面，实现极其简单的二次开发与集成。',
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-500" />,
    title: '网络级地址配置',
    desc: '支持多水声通信机网络地址配置，轻松构建水下传感器网络与通信矩阵。',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8"
          >
            突破水下通信极限
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed"
          >
            Seatrix2000融合多项前沿水声技术，为复杂多变的海洋环境提供最可靠的通信保障。
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
              
              {/* Internal glow hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent pointer-events-none transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
