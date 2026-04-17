import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Bookmark, BookmarkCheck } from 'lucide-react';
import type { Job } from '@/types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface JobCardProps {
  job: Job;
  index?: number;
  featured?: boolean;
}

export default function JobCard({ job, index = 0, featured = false }: JobCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative group rounded-2xl border transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-br from-purple-500/20 to-dark-800 border-purple-500/40 shadow-glow'
          : 'bg-dark-800 border-purple-500/20 hover:border-purple-500/40 hover:shadow-glow'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 right-4 px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
          مميزة
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center text-2xl">
              {job.logo}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-400 text-sm">{job.company}</p>
            </div>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
          >
            {saved ? <BookmarkCheck className="w-5 h-5 text-purple-400" /> : <Bookmark className="w-5 h-5" />}
          </button>
        </div>

        {/* Details */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1 text-sm text-gray-400 bg-dark-700 px-3 py-1 rounded-full">
            <MapPin className="w-3 h-3" />
            {job.location}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-400 bg-dark-700 px-3 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            {job.type}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-400 bg-dark-700 px-3 py-1 rounded-full">
            <DollarSign className="w-3 h-3" />
            {job.salary}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{job.description}</p>

        {/* Requirements */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.slice(0, 2).map((req, i) => (
            <span
              key={i}
              className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded-lg"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 2 && (
            <span className="text-xs text-gray-400 px-2 py-1">
              +{job.requirements.length - 2}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
          <span className="text-xs text-gray-500">{job.postedDate}</span>
          <Link to={`/jobs/${job.id}`}>
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              التفاصيل
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
