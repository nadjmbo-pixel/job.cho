import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import JobCard from '@/components/JobCard';
import { jobs, categories, cities, jobTypes, experienceLevels } from '@/data';

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    const matchesCity = !selectedCity || job.location === selectedCity;
    const matchesType = !selectedType || job.type === selectedType;
    return matchesSearch && matchesCategory && matchesCity && matchesType;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="البحث عن الوظائف"
            subtitle="ابحث بين آلاف الوظائف المتاحة واعثر على الفرصة المناسبة لك"
          />

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-800 border border-purple-500/20 rounded-2xl p-4 mb-6"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="عنوان الوظيفة أو الشركة..."
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
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 h-12"
              >
                <SlidersHorizontal className="w-5 h-5 ml-2" />
                فلاتر
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t border-purple-500/20 grid md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-sm text-gray-400 mb-2">التصنيف</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-10 bg-dark-700 border border-purple-500/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">جميع التصنيفات</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">نوع العمل</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full h-10 bg-dark-700 border border-purple-500/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">جميع الأنواع</option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">الخبرة</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full h-10 bg-dark-700 border border-purple-500/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">جميع المستويات</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400">
              تم العثور على <span className="text-purple-400 font-semibold">{filteredJobs.length}</span> وظيفة
            </p>
            {(selectedCategory || selectedCity || selectedType || selectedExperience) && (
              <Button
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedCity('');
                  setSelectedType('');
                  setSelectedExperience('');
                }}
                variant="ghost"
                className="text-gray-400 hover:text-purple-400"
              >
                <X className="w-4 h-4 ml-2" />
                إعادة ضبط
              </Button>
            )}
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">لا توجد نتائج</h3>
              <p className="text-gray-400">جرب تعديل معايير البحث</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
