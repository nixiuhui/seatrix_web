import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight, Anchor, Cpu, Radio, Battery, Maximize } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SpecificationsPage() {
  const specs = [
    { label: '通信速率', value: '140-2400bps (MFSK)', icon: <Zap className="w-5 h-5 text-blue-500" /> },
    { label: '通信频段', value: '9-14 kHz', icon: <Radio className="w-5 h-5 text-blue-500" /> },
    { label: '通信距离', value: '7000m (8档发射功率可调)', icon: <Target className="w-5 h-5 text-blue-500" /> },
    { label: '工作深度', value: '2000米', icon: <Anchor className="w-5 h-5 text-blue-500" /> },
    { label: '运动速度', value: '5节', icon: <ArrowRight className="w-5 h-5 text-blue-500" /> },
    { label: '换能器指向', value: '水平全向', icon: <Shield className="w-5 h-5 text-blue-500" /> },
  ];

  const electricalSpecs = [
    { label: '功耗', value: '接收: 0.75W | 发射: 10W-60W | 唤醒: 50mW (需定制)', icon: <Battery className="w-5 h-5 text-emerald-500" /> },
    { label: '供电配置', value: '内置400Wh充电电池', icon: <Zap className="w-5 h-5 text-emerald-500" /> },
    { label: '数据接口', value: 'RS-232接口', icon: <Cpu className="w-5 h-5 text-emerald-500" /> },
  ];

  const mechanicalSpecs = [
    { label: '物理尺寸', value: '长度 790mm × 直径 130mm', icon: <Maximize className="w-5 h-5 text-amber-500" /> },
    { label: '整备重量', value: '15kg (含电池)', icon: <Shield className="w-5 h-5 text-amber-500" /> },
  ];

  return (
    <>
      <Header />
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Banner Section */}
        <div className="w-full bg-slate-50 border-b border-slate-200 mb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center py-12 gap-8">

              {/* 左列：标题 + 详细介绍 */}
              <div className="flex-1 min-w-0 max-w-xl flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 text-blue-500 text-sm font-medium mb-4 uppercase tracking-widest"
                >
                  <span className="w-8 h-px bg-blue-500"></span>
                  Technical Specifications
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-slate-800 mb-5 leading-tight"
                >
                  技术参数
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-600 text-base leading-relaxed space-y-3 mb-6 max-w-xl"
                >
                  <p>
                    Seatrix2000低频水声通信机是一种采用声学方式实现信息传输的水下无线通信设备。水声通信技术是海洋领域中具有重要地位的核心技术，对水下观测、作业和军事活动具有重要的支撑作用。
                  </p>
                  <p>
                    该设备采用先进的编解码及调制解调技术，具有小型化、发射功率可调、多码率等特点，能够在浅海、深海等各种复杂海洋环境中稳定工作。内置先进的多路径抑制算法，可有效应对信道强起伏以及多途干扰，确保数据可靠传输。
                  </p>
                  <p>
                    设备工作频段为 9–14 kHz，通信速率 140–2400 bps（7档可调），在良好海况下实测通信距离可达 7000 m，最大工作深度 2000 m，最大运动速度 5 节，支持最大 ±12 m/s 相对运动的多普勒自适应补偿。换能器水平全向辐射，无需定向对准，部署便捷。
                  </p>
                  <p>
                    内置 400 Wh 大容量充电电池，接收功耗仅 0.75 W，发射功耗 10–60 W（8档可调），兼顾续航与通信功率需求。物理尺寸 790 mm × 130 mm，整备重量 15 kg（含电池），通过 RS-232 接口与上位机连接，带有功能完备的透明串口命令集，集成快捷。
                  </p>
                </motion.div>


              </div>

              {/* 右列：图片 + 左上角产品亮点 CSS 叠加 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="w-full md:w-[480px] shrink-0 relative"
              >
                <img
                  src="/images/specs_top_banner.png"
                  alt="Seatrix2000 产品图"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                {/* 左上角产品亮点叠加 */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 mb-1 pl-1">
                    Seatrix2000
                  </div>
                  {[
                    { icon: '◈', text: '深度 2000 m', color: 'bg-sky-500/90' },
                    { icon: '◉', text: '距离 7000 m', color: 'bg-blue-600/90' },
                    { icon: '◎', text: '多普勒自适应补偿', color: 'bg-slate-700/90' },
                    { icon: '◇', text: '7档速率 · 8档功率', color: 'bg-slate-600/90' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${item.color} w-fit`}
                    >
                      <span className="text-white/80 text-[10px]">{item.icon}</span>
                      <span className="text-white text-xs font-semibold tracking-wide">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Core Specs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center">1</span>
                核心通信指标
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specs.map((spec, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                  >
                    <div className="p-3 bg-slate-50 rounded-lg">{spec.icon}</div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                      <div className="font-semibold text-slate-800">{spec.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Electrical Specs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center">2</span>
                电气参数
              </h2>
              <div className="space-y-4">
                {electricalSpecs.map((spec, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="p-3 bg-slate-50 rounded-lg shrink-0">{spec.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                      <div className="font-semibold text-slate-800">{spec.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Mechanical Specs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center">3</span>
                机械与结构
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mechanicalSpecs.map((spec, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4"
                  >
                    <div className="p-3 bg-slate-50 rounded-lg">{spec.icon}</div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                      <div className="font-semibold text-slate-800">{spec.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
