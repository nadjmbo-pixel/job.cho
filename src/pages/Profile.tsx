import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Edit3,
  Save,
  FileText,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'أحمد بن علي',
    email: 'ahmed@email.com',
    phone: '+213 555 123 456',
    location: 'الجزائر العاصمة',
    title: 'مطور واجهات أمامية',
    experience: '5 سنوات',
    education: 'ليسانس في علوم الحاسوب',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'],
    bio: 'مطور واجهات أمامية شغوف ببناء تجارب مستخدم استثنائية. أمتلك خبرة واسعة في تطوير تطبيقات الويب الحديثة.',
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-800 border border-purple-500/20 rounded-2xl p-8 mb-6"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center text-4xl border-2 border-purple-500/50">
                👨‍💻
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-right">
                <h1 className="text-2xl font-bold text-white mb-1">{profile.name}</h1>
                <p className="text-purple-400 mb-2">{profile.title}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {profile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {profile.phone}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 ml-2" />
                    حفظ
                  </>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4 ml-2" />
                    تعديل
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Bio */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">نبذة عني</h2>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full h-32 bg-dark-700 border border-purple-500/20 rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                ) : (
                  <p className="text-gray-400 leading-relaxed">{profile.bio}</p>
                )}
              </div>

              {/* Experience */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">الخبرة العملية</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">مطور واجهات أمامية Senior</h3>
                      <p className="text-purple-400 text-sm">تقنية المستقبل</p>
                      <p className="text-gray-400 text-sm">2024 - الحاضر</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">مطور واجهات أمامية</h3>
                      <p className="text-purple-400 text-sm">الأفق الرقمي</p>
                      <p className="text-gray-400 text-sm">2022 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">التعليم</h2>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{profile.education}</h3>
                    <p className="text-gray-400 text-sm">جامعة الجزائر</p>
                    <p className="text-gray-400 text-sm">2018 - 2022</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Skills */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">المهارات</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">سيرتي الذاتية</h3>
                <div className="flex items-center gap-3 p-4 bg-dark-700 rounded-xl">
                  <FileText className="w-10 h-10 text-purple-400" />
                  <div className="flex-1">
                    <p className="text-white text-sm">cv_ahmed_benali.pdf</p>
                    <p className="text-gray-400 text-xs">2.4 MB</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                >
                  تحديث السيرة الذاتية
                </Button>
              </div>

              {/* Achievements */}
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">الإنجازات</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-400 text-sm">50+ طلب توظيف</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-400 text-sm">ملف مكتمل 100%</span>
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
