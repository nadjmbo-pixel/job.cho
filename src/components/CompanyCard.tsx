import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, Briefcase } from 'lucide-react';
import type { Company } from '@/types';
import { Button } from '@/components/ui/button';

interface CompanyCardProps {
  company: Company;
  index?: number;
}

export default function CompanyCard({ company, index = 0 }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-glow transition-all duration-300 group"
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
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
        {company.name}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{company.description}</p>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MapPin className="w-4 h-4 text-purple-400" />
          {company.location}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Briefcase className="w-4 h-4 text-purple-400" />
          {company.industry}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
        <span className="text-sm text-gray-400">
          <span className="text-purple-400 font-semibold">{company.jobsCount}</span> وظيفة متاحة
        </span>
        <Link to={`/companies/${company.id}`}>
          <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
            عرض التفاصيل
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
