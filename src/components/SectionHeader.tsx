import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`flex items-center gap-2 mt-4 ${centered ? 'justify-center' : ''}`}>
        <div className="w-12 h-1 bg-purple-500 rounded-full" />
        <div className="w-3 h-3 bg-purple-400 rounded-full" />
        <div className="w-12 h-1 bg-purple-500 rounded-full" />
      </div>
    </motion.div>
  );
}
