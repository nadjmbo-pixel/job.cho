import { motion } from 'framer-motion';
import {
  Briefcase,
  Eye,
  Bookmark,
  Send,
  TrendingUp,
  BarChart3,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Dashboard() {
  const stats = [
    { label: 'طلبات مرسلة', value: 12, icon: Send, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'وظائف محفوظة', value: 8, icon: Bookmark, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'مشاهدات الملف', value: 156, icon: Eye, color: 'text-green-400', bg: 'bg-green-500/10' },
    { label: 'مقابلات', value: 3, icon: Calendar, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  ];

  const recentApplications = [
    { job: 'مطور واجهات أمامية', company: 'تقنية المستقبل', date: '2026-04-15', status: 'قيد المراجعة' },
    { job: 'مدير تسويق رقمي', company: 'الأفق الرقمي', date: '2026-04-14', status: 'تم القبول' },
    { job: 'مهندس مدني', company: 'بناء المستقبل', date: '2026-04-13', status: 'قيد المراجعة' },
  ];

  const recommendedJobs = [
    { title: 'مطور React Senior', company: 'شركة التقنية', location: 'الجزائر العاصمة' },
    { title: 'مصمم UI/UX', company: 'وكالة إبداعية', location: 'وهران' },
    { title: 'مدير مشروع تقني', company: 'شركة ناشئة', location: 'قسنطينة' },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gradient mb-2">لوحة التحكم</h1>
            <p className="text-gray-400">نظرة عامة على نشاطك وإحصائياتك</p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6"
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-dark-800 border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">طلباتي الأخيرة</h2>
                <Link to="/applications">
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                    عرض الكل
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentApplications.map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-dark-700 rounded-xl"
                  >
                    <div>
                      <h3 className="text-white font-medium">{app.job}</h3>
                      <p className="text-gray-400 text-sm">{app.company}</p>
                      <p className="text-gray-500 text-xs mt-1">{app.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        app.status === 'تم القبول'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommended Jobs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-semibold text-white">وظائف مقترحة</h2>
              </div>
              <div className="space-y-4">
                {recommendedJobs.map((job, i) => (
                  <div
                    key={i}
                    className="p-4 bg-dark-700 rounded-xl hover:bg-purple-500/5 transition-colors cursor-pointer"
                  >
                    <h3 className="text-white font-medium mb-1">{job.title}</h3>
                    <p className="text-gray-400 text-sm">{job.company}</p>
                    <p className="text-gray-500 text-xs mt-1">{job.location}</p>
                  </div>
                ))}
              </div>
              <Link to="/jobs">
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  استكشف المزيد
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-dark-800 border border-purple-500/20 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">إجراءات سريعة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/profile">
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-gray-300 hover:bg-purple-500/10 h-16"
                >
                  <Briefcase className="w-5 h-5 ml-2" />
                  تحديث الملف
                </Button>
              </Link>
              <Link to="/jobs">
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-gray-300 hover:bg-purple-500/10 h-16"
                >
                  <TrendingUp className="w-5 h-5 ml-2" />
                  بحث عن وظائف
                </Button>
              </Link>
              <Link to="/resume">
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-gray-300 hover:bg-purple-500/10 h-16"
                >
                  <BarChart3 className="w-5 h-5 ml-2" />
                  سيرتي الذاتية
                </Button>
              </Link>
              <Link to="/settings">
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-gray-300 hover:bg-purple-500/10 h-16"
                >
                  <Eye className="w-5 h-5 ml-2" />
                  الإعدادات
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
