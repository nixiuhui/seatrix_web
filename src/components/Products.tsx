
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Seatrix2000 标准版",
    desc: "2000米级别水声通信机标准产品，适合全场景水下组网与数据传输。",
    image: "/images/product1.png"
  },
  {
    id: 2,
    name: "Seatrix OEM 模块",
    desc: "高度集成的OEM核心通信模块，方便二次开发与深度系统集成。",
    image: "/images/product2.png"
  },
  {
    id: 3,
    name: "Seatrix tiny 模块",
    desc: "体积小巧、极低功耗的微型水声通信节点，适用于密集型传感器网络。",
    image: "/images/product3.png"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">全系列水声通信产品</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">精简、专业、可靠，满足从标准设备到深度集成的多元化需求。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all group overflow-hidden flex flex-col items-center"
            >
              <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-50 flex items-center justify-center p-4">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">{p.name}</h3>
              <p className="text-slate-500 text-center text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
