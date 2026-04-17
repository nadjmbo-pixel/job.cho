# Vercel Deployment Guide

## تعليمات نشر المشروع على Vercel

### الخطوات:

1. **تثبيت Vercel CLI (اختياري)**
   ```bash
   npm i -g vercel
   ```

2. **نشر المشروع**
   - الطريقة الأولى (من واجهة الويب):
     - اذهب إلى [vercel.com](https://vercel.com)
     - انقر على "New Project"
     - اختر مستودعك على GitHub
     - سيتم النشر تلقائياً

   - الطريقة الثانية (من Terminal):
     ```bash
     vercel
     ```

3. **الإعدادات التلقائية**
   - framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### ملفات التكوين المضافة:

✅ **vercel.json** - لتكوين النشر والـ rewrites والـ headers
✅ **.vercelignore** - لتجاهل الملفات غير الضرورية
✅ **.env.production** - لمتغيرات الإنتاج

### الميزات المفعلة:

- ✅ SPAssistant مع Vite
- ✅ Caching للملفات الثابتة (1 سنة)
- ✅ Rewrites لدعم React Router
- ✅ تحسين الأداء والسرعة
- ✅ دعم বিভিন্ন الأجهزة

### متغيرات البيئة:

في لوحة التحكم على Vercel أضف إذا لزم الأمر:
```
NODE_ENV=production
```

### اختبار محلي:

```bash
npm run build
npm start
```

### استكشاف الأخطاء:

إذا واجهت مشاكل:
1. تحقق من السجلات على لوحة Vercel
2. تأكد من أن البناء ناجح محلياً
3. امسح الـ cache على Vercel واعد النشر

لا تتردد في التواصل للمساعدة! 🚀
