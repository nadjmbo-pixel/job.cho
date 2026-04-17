import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'الشفافية',
      description: 'نؤمن بأهمية الشفافية في جميع تعاملاتنا مع المستخدمين والشركات',
    },
    {
      icon: Users,
      title: 'التمكين',
      description: 'نسعى لتمكين الباحثين عن عمل بأدوات وموارد تساعدهم على النجاح',
    },
    {
      icon: TrendingUp,
      title: 'الابتكار',
      description: 'نستثمر في التقنية الحديثة لتقديم أفضل تجربة ممكنة',
    },
    {
      icon: Award,
      title: 'الجودة',
      description: 'نضمن جودة جميع الوظائف المنشورة والشركات المسجلة',
    },
  ];

  const stats = [
    { value: 12500, suffix: '+', label: 'وظيفة متاحة' },
    { value: 3500, suffix: '+', label: 'شركة مسجلة' },
    { value: 85000, suffix: '+', label: 'باحث عن عمل' },
    { value: 15000, suffix: '+', label: 'توظيف ناجح' },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              عن شعيب للعمل
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              منصة شعيب للعمل هي الوجهة الأولى للتوظيف في الجزائر. نربط بين أفضل المواهب
              وأكبر الشركات لبناء مستقبل مهني ناجح.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-800 border border-purple-500/20 rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">رسالتنا</h2>
              <p className="text-gray-400 leading-relaxed">
                تمكين كل جزائري من إيجاد وظيفة تناسب طموحاته ومهاراته، ومساعدة الشركات
                في العثور على أفضل الكفاءات لتحقيق أهدافها.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-800 border border-purple-500/20 rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">رؤيتنا</h2>
              <p className="text-gray-400 leading-relaxed">
                أن نكون المنصة الرائدة في التوظيف في الجزائر والمنطقة المغاربية،
                ونساهم في تقليل البطالة وبناء اقتصاد قوي ومزدهر.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="قيمنا"
            subtitle="المبادئ التي توجهنا في عملنا"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="فريقنا"
            subtitle="نخبة من المحترفين المكرسين لخدمتكم"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'أحمد شعيب', role: 'المؤسس والرئيس التنفيذي', avatar: '👨‍💼' },
              { name: 'سارة محمد', role: 'مديرة العمليات', avatar: '👩‍💼' },
              { name: 'خالد عمر', role: 'مدير التقنية', avatar: '👨‍💻' },
              { name: 'نور الهدى', role: 'مديرة التسويق', avatar: '👩‍🎨' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-dark-700 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
