import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-dark-800 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 group"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto bg-gradient-to-br from-purple-500/20 to-dark-700 flex items-center justify-center text-6xl">
            {post.image}
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block w-fit px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full mb-4">
              {post.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
              >
                اقرأ المزيد
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-800 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-glow transition-all duration-300 group"
    >
      <div className="h-48 bg-gradient-to-br from-purple-500/20 to-dark-700 flex items-center justify-center text-5xl">
        {post.image}
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full mb-3">
          {post.category}
        </span>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
