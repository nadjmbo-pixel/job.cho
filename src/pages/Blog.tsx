import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BookOpen,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(blogPosts.map((p) => p.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="المدونة"
            subtitle="نصائح وإرشادات لمسيرتك المهنية"
          />

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="البحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-dark-800 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  !selectedCategory
                    ? 'bg-purple-600 text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white border border-purple-500/20'
                }`}
              >
                الكل
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white'
                      : 'bg-dark-800 text-gray-400 hover:text-white border border-purple-500/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {!searchQuery && !selectedCategory && (
            <div className="mb-8">
              <BlogCard post={blogPosts[0]} featured />
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(searchQuery || selectedCategory ? filteredPosts : filteredPosts.slice(1)).map(
              (post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              )
            )}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">لا توجد مقالات</h3>
              <p className="text-gray-400">جرب تعديل معايير البحث</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
