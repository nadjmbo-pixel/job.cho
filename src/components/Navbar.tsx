import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  Bell,
  Briefcase,
  Building2,
  Home,
  BookOpen,
  Phone,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'الرئيسية', href: '/', icon: Home },
  { name: 'الوظائف', href: '/jobs', icon: Search },
  { name: 'الشركات', href: '/companies', icon: Building2 },
  { name: 'المدونة', href: '/blog', icon: BookOpen },
  { name: 'اتصل بنا', href: '/contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-glow"
            >
              <Briefcase className="w-5 h-5 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">شعيب</span>
              <span className="text-xs text-gray-400 -mt-1">للعمل</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white hover:bg-dark-800'
                }`}
              >
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              </button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 mt-2 w-80 bg-dark-800 border border-purple-500/20 rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-purple-500/20">
                      <h3 className="font-semibold text-white">الإشعارات</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {[
                        { title: 'وظيفة جديدة مناسبة', time: 'منذ 5 دقائق', unread: true },
                        { title: 'تم استلام طلبك', time: 'منذ ساعة', unread: true },
                        { title: 'تحديث النظام', time: 'منذ يوم', unread: false },
                      ].map((notif, i) => (
                        <div
                          key={i}
                          className={`p-3 border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors ${
                            notif.unread ? 'bg-purple-500/5' : ''
                          }`}
                        >
                          <p className="text-sm text-white font-medium">{notif.title}</p>
                          <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/notifications"
                      className="block p-3 text-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      عرض الكل
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/login">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-dark-800"
              >
                <LogIn className="w-4 h-4 ml-2" />
                دخول
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-glow">
                <UserPlus className="w-4 h-4 ml-2" />
                تسجيل
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900/98 backdrop-blur-xl border-t border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      location.pathname === link.href
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'text-gray-300 hover:bg-dark-800 hover:text-white'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-purple-500/20 space-y-2">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/30 text-gray-300 hover:bg-dark-800"
                  >
                    <LogIn className="w-4 h-4 ml-2" />
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <UserPlus className="w-4 h-4 ml-2" />
                    تسجيل جديد
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
