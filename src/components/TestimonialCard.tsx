import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
        <Quote className="w-5 h-5 text-purple-400" />
      </div>

      {/* Content */}
      <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-purple-500/10">
        <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">
            {testimonial.role} - {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
