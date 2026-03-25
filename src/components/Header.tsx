import { useState, useEffect } from 'react';
import { Waves } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

/* 导航始终显示完整四项，无"回到首页"，当前页高亮 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const base   = 'transition-colors text-slate-600 hover:text-blue-600';
  const active = '!text-blue-600 font-semibold';
  const is = (path: string) => location.pathname === path ? active : '';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center transition-transform group-hover:scale-105">
            <Waves className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-wider text-slate-900">SEATRIX</span>
        </Link>

        {/* 导航 */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/"      className={`${base} ${is('/')}`}>产品概览</Link>
          <Link to="/modes" className={`${base} ${is('/modes')}`}>应用模式</Link>
          <Link to="/specs" className={`${base} ${is('/specs')}`}>详细参数</Link>
          <Link to="/cases" className={`${base} ${is('/cases')}`}>应用案例</Link>
          <a
            href="/#contact"
            className="px-6 py-2.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow hover:shadow-md"
          >
            联系我们
          </a>
        </nav>
      </div>
    </header>
  );
}
