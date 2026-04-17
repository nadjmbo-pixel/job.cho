import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Laptop,
  TrendingUp,
  Settings,
  DollarSign,
  Users,
  Heart,
  BookOpen,
  MapPin,
  Truck,
  Briefcase,
  Palette,
  Scale,
} from 'lucide-react';
import { Category } from '@/types';

const iconMap: { [key: string]: React.ElementType } = {
  Laptop,
  TrendingUp,
  Settings,
  DollarSign,
  Users,
  Heart,
  BookOpen,
  MapPin,
  Truck,
  Briefcase,
  Palette,
  Scale,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Link
        to={`/jobs?category=${category.id}`}
        className="flex flex-col items-center p-6 bg-dark-800 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 hover:shadow-glow transition-all duration-300 group"
      >
        <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
          <Icon className="w-7 h-7 text-purple-400" />
        </div>
        <h3 className="text-white font-medium text-center mb-2 group-hover:text-purple-400 transition-colors">
          {category.name}
        </h3>
        <span className="text-gray-500 text-sm">{category.jobsCount.toLocaleString()} وظيفة</span>
      </Link>
    </motion.div>
  );
}
