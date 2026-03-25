import Header from '../components/Header';
import Footer from '../components/Footer';

const MODES = [
  {
    id: 'p2p',
    icon: '⇆',
    title: '点对点通信模式',
    subtitle: 'Point-to-Point Mode',
    desc: '两台水声通信机在水下直接点对点通信，支持全双工数据传输，通信距离10 km以上，适用于仪器数据回收、应急指令下达等场景。',
    tags: ['距离 > 10 km', '全双工', '低时延'],
    image: '/modes/mode_p2p.png',
  },
  {
    id: 'net',
    icon: '⬡',
    title: '水下组网模式',
    subtitle: 'Underwater Network Mode',
    desc: '多台水声通信机组成水下自组网，支持多跳路由与中继转发，适用于海底观测网络、大范围分布式传感器阵列数据汇聚。',
    tags: ['多节点', '路由中继', '大范围覆盖'],
    image: '/modes/mode_network.png',
  },
  {
    id: 'mob',
    icon: '▶',
    title: '运动目标通信模式',
    subtitle: 'Mobile Target Mode',
    desc: '支持与 AUV、潜航器等高速运动平台的实时通信与定位，具备多普勒自适应补偿能力，保障运动状态下的稳定数据链路。',
    tags: ['AUV/ROV', '多普勒补偿', '实时定位'],
    image: '/modes/mode_mobile.png',
  },
];

export default function ApplicationModesPage() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="pt-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-8 py-14">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-blue-500 inline-block" />
            Application Modes
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            应用模式
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl">
            Seatrix 低频水声通信机支持多种部署场景，灵活适配海洋观测与水下作业需求。
          </p>
        </div>
      </section>

      {/* 三种模式：左文右图 */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {MODES.map((m, i) => (
            <div
              key={m.id}
              className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* 左侧：文字区（40%） */}
              <div className="flex-none w-full md:w-[42%] flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100">
                {/* 序号 + 标题 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-black text-blue-100 leading-none select-none">0{i + 1}</span>
                    <span className="text-3xl text-blue-500">{m.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 leading-snug">{m.title}</h2>
                  <p className="text-blue-500 text-sm mt-1 font-medium tracking-wide">{m.subtitle}</p>
                  <p className="text-slate-600 text-lg mt-5 leading-relaxed">{m.desc}</p>
                </div>
                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {m.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 右侧：大图区（60%） */}
              <div className="flex-1 bg-slate-50 flex items-center justify-center p-4 md:p-6">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
