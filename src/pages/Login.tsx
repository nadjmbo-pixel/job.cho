import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LogIn,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-800 border border-purple-500/20 rounded-2xl p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">تسجيل الدخول</h1>
              <p className="text-gray-400">أهلاً بك مجدداً! سجل دخولك للمتابعة</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pr-10 bg-dark-700 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10 pl-12 bg-dark-700 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-purple-500/30 bg-dark-700 text-purple-600" />
                  تذكرني
                </label>
                <Link to="/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12"
              >
                <LogIn className="w-5 h-5 ml-2" />
                تسجيل الدخول
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-500/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-dark-800 text-gray-400">أو</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-purple-500/30 text-gray-300 hover:bg-purple-500/10 h-12"
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 text-gray-300 hover:bg-purple-500/10 h-12"
              >
                LinkedIn
              </Button>
            </div>

            {/* Register Link */}
            <p className="text-center text-gray-400 mt-8">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-purple-400 hover:text-purple-300 transition-colors">
                سجل الآن
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
