import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  Briefcase,
  MessageSquare,
  Settings,
  CheckCircle2,
  Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { notifications as initialNotifications } from '@/data';

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifications = notifications.filter((n) =>
    filter === 'unread' ? !n.read : true
  );

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'job':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'message':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      default:
        return <Settings className="w-5 h-5 text-gray-400" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="الإشعارات"
            subtitle="تابع آخر التحديثات والوظائف الجديدة"
          />

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  filter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white border border-purple-500/20'
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  filter === 'unread'
                    ? 'bg-purple-600 text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white border border-purple-500/20'
                }`}
              >
                غير مقروءة
                {unreadCount > 0 && (
                  <span className="mr-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
            <Button
              onClick={markAllAsRead}
              variant="ghost"
              className="text-gray-400 hover:text-purple-400"
            >
              <CheckCircle2 className="w-4 h-4 ml-2" />
              تحديد الكل كمقروء
            </Button>
          </motion.div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-dark-800 border rounded-xl p-4 transition-all ${
                  notification.read
                    ? 'border-purple-500/10'
                    : 'border-purple-500/30 bg-purple-500/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className={`font-medium ${notification.read ? 'text-gray-300' : 'text-white'}`}>
                          {notification.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                        <p className="text-gray-500 text-xs mt-2">{notification.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
                            title="تحديد كمقروء"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">لا توجد إشعارات</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
