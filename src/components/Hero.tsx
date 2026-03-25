import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center overflow-hidden bg-slate-50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-50 z-10 opacity-70"></div>
        <img 
          src="/images/IMG_20210203_152244.jpg" 
          alt="Ocean Background" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow opacity-20 mix-blend-multiply filter grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-slate-50 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-blue-700 font-medium text-sm tracking-wide">
              国产自主研发
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Seatrix2000
            </span>
            <br />水声通信机
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
            专为复杂水下环境打造的高端微型水声通信机。采用先进的扩频调制与强鲁棒解码算法，无论是浅水严苛噪声还是深海远洋作业，均能为您提供犹如陆地般稳定的数字基座。
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#specs" className="px-8 py-4 rounded bg-blue-600 text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              探索技术规格
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded bg-white text-slate-700 font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow">
              联系我们
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">10<span className="text-blue-600 text-base font-semibold ml-1">km</span></div>
              <div className="text-sm text-slate-500">最大通信距离</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">2400<span className="text-blue-600 text-base font-semibold ml-1">bps</span></div>
              <div className="text-sm text-slate-500">最高通信速率</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">5<span className="text-blue-600 text-base font-semibold ml-1">mW</span></div>
              <div className="text-sm text-slate-500">唤醒功率</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full flex justify-center"
        >
          {/* Main Product Image — 缩小至 80% 宽度，居中 */}
          <div className="relative z-10 rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-100 w-full">
            <img 
              src="/images/hero_2000_premium.png" 
              alt="Seatrix2000 High-End Product" 
              className="w-full rounded-xl object-cover h-[374px] md:h-[562px]"
            />
            
            {/* 信道适应浮卡：左上角，避免遮挡文字 */}
            <div className="absolute top-4 left-4 bg-white/95 border border-slate-100 shadow-lg px-3 py-2 rounded-lg hidden md:flex items-center gap-2 backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <Activity className="text-emerald-600 w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">信道适应</div>
                <div className="text-sm font-bold text-slate-800">多路径抑制</div>
              </div>
            </div>

            {/* 极低功耗浮卡：右下角，不遮挡文字，内嵌于图片内 */}
            <div className="absolute bottom-4 right-4 bg-white/95 border border-slate-100 shadow-lg px-3 py-2 rounded-lg hidden md:flex items-center gap-2 backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Zap className="text-blue-600 w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">能效</div>
                <div className="text-sm font-bold text-slate-800">极低功耗</div>
              </div>
            </div>
          </div>
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-200/40 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
