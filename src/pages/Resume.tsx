import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Edit3,
  Save,
  GraduationCap,
  Briefcase,
  Award,
  User,
  Mail,
  Phone,
  MapPin,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export default function Resume() {
  const [isEditing, setIsEditing] = useState(false);
  const [resume] = useState({
    personal: {
      name: 'أحمد بن علي',
      email: 'ahmed@email.com',
      phone: '+213 555 123 456',
      location: 'الجزائر العاصمة',
      title: 'مطور واجهات أمامية',
      summary: 'مطور واجهات أمامية شغوف بخبرة 5 سنوات في بناء تطبيقات الويب الحديثة. أمتلك مهارات قوية في React و TypeScript و Tailwind CSS.',
    },
    experience: [
      {
        id: 1,
        title: 'مطور واجهات أمامية Senior',
        company: 'تقنية المستقبل',
        location: 'الجزائر العاصمة',
        startDate: '2024',
        endDate: 'الحاضر',
        description: 'تطوير وصيانة تطبيقات الويب باستخدام React و Next.js',
      },
      {
        id: 2,
        title: 'مطور واجهات أمامية',
        company: 'الأفق الرقمي',
        location: 'وهران',
        startDate: '2022',
        endDate: '2024',
        description: 'تصميم وتطوير واجهات المستخدم التفاعلية',
      },
    ],
    education: [
      {
        id: 1,
        degree: 'ليسانس في علوم الحاسوب',
        school: 'جامعة الجزائر',
        year: '2022',
      },
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Next.js'],
    languages: [
      { name: 'العربية', level: 'اللغة الأم' },
      { name: 'الفرنسية', level: 'متقدم' },
      { name: 'الإنجليزية', level: 'متوسط' },
    ],
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
              title="سيرتي الذاتية"
              subtitle="أنشئ وحرر سيرتك الذاتية الاحترافية"
            />
            <div className="flex gap-2">
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
              <Button
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              >
                <Download className="w-4 h-4 ml-2" />
                تحميل PDF
              </Button>
            </div>
          </div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{resume.personal.name}</h1>
                  <p className="text-purple-200 text-lg mb-4">{resume.personal.title}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-purple-100">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {resume.personal.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {resume.personal.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {resume.personal.location}
                    </span>
                  </div>
                </div>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  نبذة شخصية
                </h2>
                <p className="text-gray-600 leading-relaxed">{resume.personal.summary}</p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  الخبرة العملية
                </h2>
                <div className="space-y-6">
                  {resume.experience.map((exp) => (
                    <div key={exp.id} className="border-r-2 border-purple-200 pr-4">
                      <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-purple-600">{exp.company}</p>
                      <p className="text-gray-500 text-sm">
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  التعليم
                </h2>
                <div className="space-y-4">
                  {resume.education.map((edu) => (
                    <div key={edu.id} className="border-r-2 border-purple-200 pr-4">
                      <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-purple-600">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  المهارات
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">اللغات</h2>
                <div className="grid grid-cols-3 gap-4">
                  {resume.languages.map((lang, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                      <p className="font-semibold text-gray-800">{lang.name}</p>
                      <p className="text-gray-500 text-sm">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
