import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="اتصل بنا"
            subtitle="نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-400 text-sm mb-2">للاستفسارات العامة</p>
                <a
                  href="mailto:contact@chaibemploi.dz"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  contact@chaibemploi.dz
                </a>
              </div>

              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">الهاتف</h3>
                <p className="text-gray-400 text-sm mb-2">من الأحد إلى الخميس</p>
                <a
                  href="tel:+21323456789"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  +213 23 45 67 89
                </a>
              </div>

              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">العنوان</h3>
                <p className="text-gray-400 text-sm">
                  حي بوزريعة، الجزائر العاصمة
                  <br />
                  الجزائر
                </p>
              </div>

              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">ساعات العمل</h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>الأحد - الخميس: 8:00 - 17:00</p>
                  <p>الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-dark-800 border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-semibold text-white">أرسل لنا رسالة</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الاسم *</label>
                      <Input
                        placeholder="الاسم الكامل"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-dark-700 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني *</label>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-dark-700 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">الموضوع *</label>
                    <Input
                      placeholder="موضوع الرسالة"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-dark-700 border-purple-500/20 text-white placeholder:text-gray-500 h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">الرسالة *</label>
                    <textarea
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-48 bg-dark-700 border border-purple-500/20 rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
