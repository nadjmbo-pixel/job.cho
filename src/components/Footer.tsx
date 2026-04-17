import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from 'lucide-react';

const footerLinks = {
  jobs: [
    { name: 'وظائف تقنية المعلومات', href: '/jobs?category=it' },
    { name: 'وظائف المبيعات', href: '/jobs?category=sales' },
    { name: 'وظائف الهندسة', href: '/jobs?category=engineering' },
    { name: 'وظائف عن بعد', href: '/jobs?type=remote' },
    { name: 'وظائف حديثة', href: '/recent-jobs' },
  ],
  company: [
    { name: 'عن الموقع', href: '/about' },
    { name: 'اتصل بنا', href: '/contact' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'شروط الاستخدام', href: '/terms' },
    { name: 'سياسة الخصوصية', href: '/privacy' },
  ],
  services: [
    { name: 'نشر وظيفة', href: '/post-job' },
    { name: 'البحث عن موظفين', href: '/search-candidates' },
    { name: 'المدونة', href: '/blog' },
    { name: 'الشركاء', href: '/partners' },
    { name: 'الدعم الفني', href: '/support' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-glow">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">شعيب</span>
                <span className="text-xs text-gray-400 -mt-1">للعمل</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              منصة شعيب للعمل هي الوجهة الأولى للباحثين عن عمل وأصحاب الشركات في الجزائر. نسعى لربط
              المواهب بالفرص.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>contact@chaibemploi.dz</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+213 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>الجزائر العاصمة، الجزائر</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">الوظائف</h3>
            <ul className="space-y-2">
              {footerLinks.jobs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">الشركة</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="py-6 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 شعيب للعمل. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Instagram, href: '#' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-dark-800 border border-purple-500/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full shadow-glow flex items-center justify-center text-white z-40 transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
