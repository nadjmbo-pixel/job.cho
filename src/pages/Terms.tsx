import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  const sections = [
    {
      title: '1. مقدمة',
      content: 'مرحباً بك في منصة شعيب للعمل. باستخدامك للموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام خدماتنا.',
    },
    {
      title: '2. التسجيل والحساب',
      points: [
        'يجب أن يكون عمرك 18 عاماً على الأقل للتسجيل في الموقع',
        'يجب تقديم معلومات دقيقة وصحيحة أثناء التسجيل',
        'أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك',
        'يجب إبلاغنا فوراً عن أي استخدام غير مصرح به لحسابك',
      ],
    },
    {
      title: '3. استخدام الموقع',
      points: [
        'يقتصر استخدام الموقع على الأغراض القانونية المتعلقة بالتوظيف',
        'يحظر نشر أي محتوى كاذب أو مضلل أو غير دقيق',
        'يحظر استخدام الموقع لأي غرض تجاري غير مصرح به',
        'يحظر محاولة الوصول غير المصرح به إلى أنظمة الموقع',
      ],
    },
    {
      title: '4. المحتوى',
      points: [
        'أنت تحتفظ بحقوق الملكية الفكرية للمحتوى الذي تنشره',
        'تمنحنا ترخيصاً لاستخدام وعرض وتوزيع محتواك على الموقع',
        'نحتفظ بالحق في إزالة أي محتوى يخالف هذه الشروط',
      ],
    },
    {
      title: '5. الخصوصية',
      content: 'نلتزم بحماية خصوصيتك ومعلوماتك الشخصية. يرجى مراجعة سياسة الخصوصية الخاصة بنا لفهم كيفية جمع واستخدام معلوماتك.',
    },
    {
      title: '6. المسؤولية',
      points: [
        'نحن لسنا مسؤولين عن دقة الوظائف المنشورة أو سلوك الشركات',
        'نحن لا نضمن العثور على وظيفة من خلال استخدام الموقع',
        'أنت تستخدم الموقع على مسؤوليتك الخاصة',
      ],
    },
    {
      title: '7. التعديلات',
      content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات جوهرية. استمرارك في استخدام الموقع بعد التعديلات يعني قبولك للشروط الجديدة.',
    },
    {
      title: '8. التواصل',
      content: 'لأي استفسارات حول هذه الشروط، يرجى التواصل معنا عبر البريد الإلكتروني: support@chaibemploi.dz',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-gradient mb-4">شروط الاستخدام</h1>
            <p className="text-gray-400">آخر تحديث: 17 أبريل 2026</p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-dark-800 border border-purple-500/20 rounded-2xl p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                {section.content && (
                  <p className="text-gray-400 leading-relaxed">{section.content}</p>
                )}
                {section.points && (
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
