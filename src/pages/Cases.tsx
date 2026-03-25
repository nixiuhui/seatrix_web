
import Header from '../components/Header';
import Footer from '../components/Footer';

// 数据来源：
// - 《水声通信技术在水下环境观测中的应用》2024技术报告
// - 《低频水声通信机商业计划书-2021.7.15V2》PPT
// - Seatrix系列海试记录（2019-2021）
const cases = [
  {
    title: "太平洋深水环境观测系统",
    subtitle: "深度1300m · 成功率100% · 通信距离4.27km",
    desc: "2022年6月，在太平洋水深1300米海域部署深海水下环境观测系统，通信机置于水体中部。连续工作一个月，单日传输22个文件，传输成功率达100%，最远通信距离4277.63米，通信机当日录制2GB原始数据。当距离约2km时，通信速率稳定维持1kbps；4km时信噪比仍达7~11dB，数据传输正常。",
    image: "/images/IMG_20210203_073409.jpg",
    date: "2022年06月"
  },
  {
    title: "南海浅水海洋牧场星型网络",
    subtitle: "15个水下节点 · 水深100m · 数据回收率98.6%",
    desc: "在南海某海洋牧场部署由15个水下节点和1个水面节点构成的浅水观测系统，水深100米，水面浮标与水下节点间距1000米，采用60秒轮询应答方式，共完成100轮数据采集。理论应回收1500条数据，实际回收1479条，数据回收率98.6%，用户可通过陆地云平台实时浏览各节点水下信息。",
    image: "/images/IMG_20210203_094651.jpg",
    date: "2023年03月"
  },
  {
    title: "青岛胶州湾系列海试验证",
    subtitle: "多阶段 · 2019—2021年 · 逾30次海试",
    desc: "自2019年起持续开展青岛胶州湾通信机性能验证，前后完成舟山近海、青岛大公岛、青岛远海联合、威海褚岛（国家浅海综合试验场）等超过30次阶段性海试，最长连续部署时间达186天，累计成功接收数据超过4000条，推动产品完成V1→V3三代迭代。",
    image: "/images/IMG_20210203_094815.jpg",
    date: "2021年05月"
  },
  {
    title: "三亚远海声学通信联合试验",
    subtitle: "深海 · 多机构合作 · 突破禁运壁垒",
    desc: `联合中船重工第760研究所、青岛理工大学等机构，在三亚远海开展多轮通信性能联合测试。实测证明，Seatrix核心技术完全自主可控，性能优于美国禁运的Teledyne Benthos ATM885低频水声通信机，在低频水声通信领域成功突破"卡脖子"限制。`,
    image: "/images/IMG_20210203_074449.jpg",
    date: "2021年02月"
  },
  {
    title: "科研单位多场景实际应用",
    subtitle: "5家机构 · 受到用户一致好评",
    desc: "Seatrix水声通信机已成功应用于山东省科学院seatrix、青岛泰戈菲斯海洋装备股份公司、青岛理工大学、中船重工第760研究所和青岛科技大学的相关科研项目，覆盖水下环境监测、海洋物联网、水下机器人控制等多个研究方向，受到用户一致好评。",
    image: "/images/IMG_20210203_152244.jpg",
    date: "2021年至今"
  },
  {
    title: "青岛大公岛联合出海验证",
    subtitle: "V2样机 · 多机同步测试 · 稳定收发数据",
    desc: "2020年11月，研发团队携V2样机于青岛大公岛海域开展联合出海验证，首次实现两台通信机在真实开阔海域的同步收发测试。本次海试完成了通信链路建立、指令下行与数据上行全流程验证，为产品从实验室走向实海提供了关键数据支撑，奠定了后续系列化研发的基础。",
    image: "/images/seatrix_deck_trial.jpg",
    date: "2020年11月"
  },
  {
    title: "舟山近海初次海上验证",
    subtitle: "V1初版样机 · 首次海试 · 完成通信链路验证",
    desc: "2019年12月，研发团队赶赴舟山近海，完成Seatrix V1样机首次真实海试。工程师穿着救生衣在甲板上对通信机进行接线与参数配置，通过笔记本电脑实时监测信道状态与数据流。本次海试验证了核心通信算法在动态海洋环境下的可用性，正式开启了Seatrix系列从0到1的工程化突破历程。",
    image: "/images/seatrix_debug_trial.jpg",
    date: "2019年12月"
  }
];

export default function Cases() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-24 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-6 max-w-5xl py-12 flex-1 relative z-10">
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">应用案例</h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
            自2019年至今，Seatrix系列通信机已完成逾30次海试，覆盖深海、浅水、移动平台等多种复杂场景。
          </p>
        </div>
        
        <div className="space-y-10">
          {cases.map((c, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* 图文布局：奇数左图右文，偶数右图左文 */}
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* 图片区 */}
                <div className="md:w-2/5 flex-shrink-0 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 文字区 */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3 w-max">
                    {c.date}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {c.title}
                  </h3>
                  {c.subtitle && (
                    <p className="text-sm text-slate-500 font-medium mb-4">{c.subtitle}</p>
                  )}
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                    {c.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vh] h-[50vh] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[40vh] h-[40vh] bg-emerald-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="mt-auto pt-12 z-10 relative">
        <Footer />
      </div>
    </div>
  );
}
