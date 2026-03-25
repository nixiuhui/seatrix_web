import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const specifications = [
  { label: "最大通信距离", value: "10", unit: "km", desc: "实机水下测试可达" },
  { label: "最高通信速率", value: "2400", unit: "bps", desc: "向下支持140bps，共八档可调" },
  { label: "最大多普勒容限", value: "±12", unit: "m/s", desc: "相对运动速度支持" },
  { label: "发射功率等级", value: "-21~0", unit: "dB", desc: "可根据距离动态调节" },
];

export default function Specifications() {
  return (
    <section id="specs" className="py-24 relative overflow-hidden bg-[#050B14]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              顶级规格，卓越表现
            </h2>
            <p className="text-slate-400 text-lg mb-16 leading-relaxed font-light mx-auto max-w-2xl">
              不仅仅是简单的通信网关，Seatrix2000从硬件架构到软件协议均采用专业级设计，全方位适应水下环境，支持网络地址配置与多机协同。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {specifications.map((spec, index) => (
                <div key={index} className="glass-dark p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
                  
                  <div className="text-sm text-slate-400 mb-2 relative z-10">{spec.label}</div>
                  <div className="text-4xl font-extrabold text-white mb-2 relative z-10 flex items-baseline gap-1">
                    {spec.value}
                    <span className="text-lg text-primary">{spec.unit}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-light relative z-10">{spec.desc}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3 text-sm text-emerald-400 bg-emerald-400/10 px-6 py-4 rounded-lg border border-emerald-400/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                自带环境检测功能以及便捷的空气测试模式，下水前一键验证系统状态！
              </div>
              
              <Link to="/specs" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25">
                查看详细参数 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
