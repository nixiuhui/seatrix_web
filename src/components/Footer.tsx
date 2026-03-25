import { Waves, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#020617] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-ocean-600 to-primary flex items-center justify-center">
                <Waves className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">
                SEATRIX
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-light max-w-sm mb-6">
              seatrix 自主研发，致力于提供世界级的水声通信与定位解决方案，探索深海的无限可能。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">产品与技术</h4>
            <ul className="space-y-4">
              <li><a href="/#hero" className="text-slate-400 hover:text-primary transition-colors text-sm font-light">Seatrix2000</a></li>
              <li><Link to="/specs" className="text-slate-400 hover:text-primary transition-colors text-sm font-light">详细规格与数据表</Link></li>
              <li><Link to="/cases" className="text-slate-400 hover:text-primary transition-colors text-sm font-light">工程案例</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">联系方式</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm font-light">山东省青岛市黄岛区<br/>seatrix</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5" />
                <a href="mailto:contact@seatrix.com" className="text-slate-400 hover:text-primary transition-colors text-sm font-light">contact@seatrix.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5" />
                <span className="text-slate-400 text-sm font-light">+86 (0532) 8000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row shadow justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-light">
            &copy; {new Date().getFullYear()} seatrix. 保留所有权利.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-light">隐私政策</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-light">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
