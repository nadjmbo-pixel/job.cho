import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Building2,
  MapPin,
  Star,
  SlidersHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { companies, cities } from '@/data';

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const industries = [...new Set(companies.map((c) => c.industry))];

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      !searchQuery ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = !selectedCity || company.location === selectedCity;
    const matchesIndustry = !selectedIndustry || company.industry === selectedIndustry;
    return matchesSearch && matchesCity && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="الشركات"
            subtitle="تعرف على أفضل الشركات الجزائرية واكتشف فرص العمل المتاحة"
          />

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-800 border border-purple-500/20 rounded-2xl p-4 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="اسم الشركة أو النشاط..."
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
              <div className="relative md:w-48">
                <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full h-12 pr-10 bg-dark-700 border border-purple-500/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">جميع القطاعات</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <p className="text-gray-400 mb-6">
            تم العثور على <span className="text-purple-400 font-semibold">{filteredCompanies.length}</span> شركة
          </p>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-glow transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center text-3xl">
                    {company.logo}
                  </div>
                  <div className="flex items-center gap-1 bg-purple-500/10 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-medium">{company.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-white mb-2">{company.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{company.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    {company.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Building2 className="w-4 h-4 text-purple-400" />
                    {company.industry}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                  <span className="text-sm text-gray-400">
                    <span className="text-purple-400 font-semibold">{company.jobsCount}</span> وظيفة
                  </span>
                  <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                    عرض التفاصيل
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">لا توجد شركات</h3>
              <p className="text-gray-400">جرب تعديل معايير البحث</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
