import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Building2,
  Bookmark,
  Share2,
  ArrowLeft,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { jobs } from '@/data';

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-dark-900">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">الوظيفة غير موجودة</h2>
          <Link to="/jobs">
            <Button className="bg-purple-600 hover:bg-purple-700">
              العودة للوظائف
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للوظائف
          </Link>

          {/* Job Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-800 border border-purple-500/20 rounded-2xl p-8 mb-6"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center text-3xl">
                  {job.logo}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">{job.title}</h1>
                  <Link
                    to={`/companies/${job.company}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {job.company}
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/30 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                >
                  <Bookmark className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/30 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Job Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-2 text-gray-400 bg-dark-700 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-purple-400" />
                {job.location}
              </span>
              <span className="flex items-center gap-2 text-gray-400 bg-dark-700 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-purple-400" />
                {job.type}
              </span>
              <span className="flex items-center gap-2 text-gray-400 bg-dark-700 px-4 py-2 rounded-lg">
                <DollarSign className="w-4 h-4 text-purple-400" />
                {job.salary}
              </span>
              <span className="flex items-center gap-2 text-gray-400 bg-dark-700 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4 text-purple-400" />
                نشر بتاريخ: {job.postedDate}
              </span>
            </div>

            {/* Apply Button */}
            <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 h-12">
              <Send className="w-5 h-5 ml-2" />
              تقدم للوظيفة الآن
            </Button>
          </motion.div>

          {/* Job Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Description */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">وصف الوظيفة</h2>
                <p className="text-gray-400 leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">المتطلبات</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Company Info */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">عن الشركة</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-10 h-10 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">{job.company}</p>
                    <p className="text-gray-400 text-sm">{job.category}</p>
                  </div>
                </div>
                <Link to={`/companies/${job.company}`}>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                  >
                    عرض الملف التعريفي
                  </Button>
                </Link>
              </div>

              {/* Job Summary */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">ملخص الوظيفة</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">الموقع</span>
                    <span className="text-white">{job.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">نوع العمل</span>
                    <span className="text-white">{job.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">الراتب</span>
                    <span className="text-white">{job.salary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">تاريخ النشر</span>
                    <span className="text-white">{job.postedDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
