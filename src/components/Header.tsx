import { useState, useEffect } from 'react';
import { Waves, Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

/* 导航支持移动端汉堡菜单 */
export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* 路由切换时自动关闭菜单 */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const base   = 'transition-colors text-slate-600 hover:text-blue-600';
  const active = '!text-blue-600 font-semibold';
  const is = (path: string) => location.pathname === path ? active : '';

  const navLinks = (
    <>
      <Link to="/"      className={`${base} ${is('/')}`}      onClick={() => setMenuOpen(false)}>产品概览</Link>
      <Link to="/modes" className={`${base} ${is('/modes')}`} onClick={() => setMenuOpen(false)}>应用模式</Link>
      <Link to="/specs" className={`${base} ${is('/specs')}`} onClick={() => setMenuOpen(false)}>详细参数</Link>
      <Link to="/cases" className={`${base} ${is('/cases')}`} onClick={() => setMenuOpen(false)}>应用案例</Link>
      <a
        href="/#contact"
        onClick={() => setMenuOpen(false)}
        className="px-6 py-2.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow hover:shadow-md text-center"
      >
        联系我们
      </a>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
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

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks}
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          className="md:hidden p-2 rounded text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="切换菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {menuOpen && (
        <nav className="md:hidden bg-white/98 border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium shadow-lg">
          {navLinks}
        </nav>
      )}
    </header>
  );
}
