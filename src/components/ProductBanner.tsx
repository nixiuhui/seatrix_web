

/**
 * 产品详情页的顶部 Banner 组件 (左右分栏布局)
 * 采用深色高级科技感设计。左右分栏适配正方特写图，并在图片左上角空白处通过毛玻璃悬浮卡片展示核心亮点，体现高端定位。
 */
export default function ProductBanner() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-slate-900 text-white overflow-hidden font-sans">
      {/* 极简深色背景光晕点缀，增加科技感 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* 左侧文字与按钮区 */}
        <div className="flex flex-col justify-center space-y-8">
          {/* 标签 */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest w-max backdrop-blur-sm">
            核心舰载级终端
          </div>
          
          {/* 大标题 */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-slate-50">
            深海潜行，<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              数据无缝互联
            </span>
          </h1>
          
          {/* 简介描述 */}
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            专为复杂水下环境打造的高端微型水声通信机。采用先进的扩频调制与强鲁棒解码算法，无论是浅水严苛噪声还是深海远洋作业，均能为您提供犹如陆地般稳定的数字基座。
          </p>

          {/* 交互按钮 */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              获取技术方案
            </button>
            <button className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all duration-300">
              下载规格书 PDF
            </button>
          </div>
        </div>

        {/* 右侧产品图片与悬浮参数区 */}
        <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          
          {/* 优化后的正方主图容器 */}
          <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm group">
             {/* 替换为普通img标签，或者直接展示占位图案 */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-105 transition-transform duration-700"></div>
             
             {/* 这里可以放一张真实产品图的img标签 */}
             <img 
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800" 
                alt="旗舰水声通信机设备"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700"
             />
             
             {/* 针对图片左上角空白：设计半透明物理参数面板，强化高端硬件调性 */}
             <div className="absolute top-6 left-6 p-5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg flex flex-col gap-4">
                
                {/* 亮点参数 1: 距离 */}
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-6 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-wider">最大可靠通信距离</div>
                    <div className="text-xl font-bold text-white font-mono leading-none mt-1">
                      10<span className="text-sm font-sans text-slate-300 ml-1">km</span>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>

                {/* 亮点参数 2: 深度 */}
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-6 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-wider">极限工作深度</div>
                    <div className="text-xl font-bold text-white font-mono leading-none mt-1">
                      2000<span className="text-sm font-sans text-slate-300 ml-1">m</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>

                {/* 亮点参数 3: 算法特性 */}
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-6 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-wider">核心解码层</div>
                    <div className="text-sm font-bold text-white leading-none mt-1">抗多径扩频算法</div>
                  </div>
                </div>

             </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
