import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  ArrowLeft,
  Sparkles,
  Zap,
  Shield,
  Globe,
  UserPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimatedCounter from '@/components/AnimatedCounter';
import JobCard from '@/components/JobCard';
import CategoryCard from '@/components/CategoryCard';
import CompanyCard from '@/components/CompanyCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';
import { stats, categories, jobs, companies, testimonials, blogPosts, cities } from '@/data';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  [cities];
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3YzNhZWQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-8"
            >
              <Sparkles className="w-4 h-4" />
              أكبر منصة توظيف في الجزائر
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              اعثر على <span className="text-gradient">وظيفة أحلامك</span>
              <br />
              في الجزائر
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              آلاف الوظائف المتاحة من أفضل الشركات الجزائرية. سيرتك الذاتية هي بوابتك للمستقبل.
            </motion.p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-dark-800/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 shadow-glow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="عنوان الوظيفة أو الكلمات المفتاحية..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10 bg-dark-700 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
                    />
                  </div>
                  <div className="relative md:w-48">
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full h-12 pr-10 bg-dark-700 border border-purple-500/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">جميع المدن</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Link to={`/jobs?q=${searchQuery}&city=${selectedCity}`}>
                    <Button className="w-full md:w-auto h-12 bg-purple-600 hover:bg-purple-700 text-white px-8">
                      <Search className="w-5 h-5 ml-2" />
                      بحث
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { icon: Briefcase, label: 'وظيفة متاحة', value: '12,500+' },
                { icon: Building2, label: 'شركة مسجلة', value: '3,500+' },
                { icon: Users, label: 'باحث عن عمل', value: '85,000+' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <stat.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-800/50">
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

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="تصفح الوظائف حسب التصنيف"
            subtitle="اختر المجال المهني الذي يناسب خبراتك واهتماماتك"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">وظائف مميزة</h2>
              <p className="text-gray-400">أفضل الفرص الوظيفية المتاحة حالياً</p>
            </div>
            <Link to="/jobs">
              <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                عرض الكل
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.filter((j) => j.featured).map((job, index) => (
              <JobCard key={job.id} job={job} index={index} featured />
            ))}
            {jobs.filter((j) => !j.featured).slice(0, 4).map((job, index) => (
              <JobCard key={job.id} job={job} index={index + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="كيف يعمل الموقع"
            subtitle="خطوات بسيطة للعثور على وظيفتك المثالية"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'أنشئ حسابك',
                description: 'سجل مجاناً وأنشئ ملفك الشخصي مع سيرتك الذاتية',
                step: '01',
              },
              {
                icon: Search,
                title: 'ابحث عن وظائف',
                description: 'استخدم محرك البحث المتقدم للعثور على الوظائف المناسبة',
                step: '02',
              },
              {
                icon: Briefcase,
                title: 'تقدم للوظيفة',
                description: 'قدم طلبك مباشرة مع سيرتك الذاتية وبخطوة واحدة',
                step: '03',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
                  <item.icon className="w-10 h-10 text-purple-400" />
                </div>
                <span className="absolute top-0 right-1/3 text-6xl font-bold text-purple-500/10">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">شركات موثوقة</h2>
              <p className="text-gray-400">أفضل الشركات الجزائرية التي ت trusts منصتنا</p>
            </div>
            <Link to="/companies">
              <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                عرض الكل
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.slice(0, 6).map((company, index) => (
              <CompanyCard key={company.id} company={company} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="لماذا شعيب للعمل؟"
            subtitle="مميزات تجعلنا الخيار الأول للباحثين عن عمل"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'سريع وسهل',
                description: 'واجهة سهلة الاستخدام وعملية بحث سريعة',
              },
              {
                icon: Shield,
                title: 'آمن وموثوق',
                description: 'نتحقق من جميع الشركات والوظائف المنشورة',
              },
              {
                icon: Globe,
                title: 'تغطية شاملة',
                description: 'وظائف في جميع ولايات الجزائر',
              },
              {
                icon: TrendingUp,
                title: 'فرص نمو',
                description: 'وظائف تناسب جميع مستويات الخبرة',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="آراء مستخدمينا"
            subtitle="قصص نجاح من استخدموا منصتنا"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">آخر المقالات</h2>
              <p className="text-gray-400">نصائح وإرشادات لمسيرتك المهنية</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                عرض الكل
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
          <div className="mb-8">
            <BlogCard post={blogPosts[0]} featured />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1, 4).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                هل أنت جاهز للبدء؟
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                انضم إلى آلاف الباحثين عن عمل الذين وجدوا وظائفهم المثالية من خلال منصتنا
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-8">
                    <UserPlus className="w-5 h-5 ml-2" />
                    سجل مجاناً
                  </Button>
                </Link>
                <Link to="/post-job">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    <Building2 className="w-5 h-5 ml-2" />
                    انشر وظيفة
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
