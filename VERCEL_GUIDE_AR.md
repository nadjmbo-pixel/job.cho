# دليل النشر على Vercel 🚀

## الملفات المضافة/المعدلة للتوافق مع Vercel:

### 1️⃣ **vercel.json**
- تكوين البناء والنشر
- إعادة توجيه المسارات (Rewrites) لدعم React Router
- إعدادات الـ Headers للـ Caching
- تحديد مجلد الإخراج (dist)

### 2️⃣ **vite.config.ts** (محسّن)
- تقسيم الأكواد بذكاء (Code Chunking) لتحسين الأداء
- Base URL صحيح للنشر
- إعدادات Preview و Server

### 3️⃣ **.vercelignore**
- تجاهل الملفات غير الضرورية (تقليل حجم النشر)

### 4️⃣ **.env.production**
- متغيرات البيئة للإنتاج

### 5️⃣ **package.json** (محدث)
- إضافة نص `start` للتشغيل المحلي

---

## خطوات النشر:

### خيار 1: عبر واجهة الويب (الأسهل)
```bash
1. اذهب إلى https://vercel.com
2. سجل دخول أو أنشئ حساب
3. انقر "New Project"
4. اختر مستودعك على GitHub
5. سيبدأ النشر تلقائياً
```

### خيار 2: عبر Vercel CLI
```bash
# تثبيت Vercel CLI (لمرة واحدة)
npm i -g vercel

# النشر
cd /workspaces/job.cho
vercel

# الإجابة على الأسئلة:
# - Link to existing project? (y/n) → n
# - Project name → اختر اسماً
# - Directory → ./
# - Deploy → y
```

---

## إعدادات Vercel المهمة:

### متغيرات البيئة (Environment Variables):
إذا كنت تستخدم متغيرات من .env، أضفها في Vercel:
- Settings → Environment Variables
- مثال: `VITE_API_URL=https://your-api.com`

### Domains:
- Dashboard → Settings → Domains
- أضف اسم النطاق الخاص بك

---

## اختبار محلي قبل النشر:

```bash
# بناء المشروع
npm run build

# التشغيل المحلي (محاكاة الإنتاج)
npm start

# سيفتح على http://localhost:5173
```

---

## ملخص التحسينات المضافة:

✅ **Code Chunking محسّن**
- React vendor chunk منفصل
- UI components vendor chunk منفصل  
- Libraries chunk منفصل
- Main app chunk منفصل

✅ **Caching محسّن**
- الملفات الثابتة تُحفظ لمدة سنة واحدة
- تحديثات سريعة عند تغيير الكود

✅ **Routing محسّن**
- Rewrites تدعم React Router بشكل كامل
- جميع المسارات تعود إلى index.html

✅ **Performance محسّن**
- حجم التحميل الأولي أقل
- تحميل كود الصفحات عند الطلب

---

## التحقق من الحالة:

```bash
# معرفة حالة النشر
vercel status

# عرض السجلات
vercel logs

# إعادة نشر
vercel --prod
```

---

## استكشاف الأخطاء:

### ❌ خطأ "Build failed"
1. تحقق من `npm run build` محلياً
2. شاهد السجلات في Vercel Dashboard
3. تأكد من أن `dist/` يُنشأ بنجاح

### ❌ صفحة 404
- تأكد من أن `vercel.json` يحتوي على `rewrites` الصحيح
- امسح cache على Vercel وأعد النشر

### ❌ style مفقودة
- تحقق من `base: '/'` في `vite.config.ts`
- تأكد من أن CSS مُدرج في HTML تم بناؤه

---

## الأوامر المفيدة:

```bash
# تط Vercel CLI
vercel env ls          # عرض متغيرات البيئة
vercel env add KEY VAL # إضافة متغير
vercel env rm KEY      # حذف متغير
vercel env pull        # تحميل .env محلياً

# الإنتاج
vercel --prod          # نشر في الإنتاج
vercel preview         # نشر Preview

# آخر
vercel whoami          # معلومات الحساب
vercel logout          # تسجيل خروج
```

---

## دعم العربية:

المشروع يدعم النصوص العربية بالكامل ✅

---

## الخطوة التالية:

سيكون لديك عنوان URL خاص بك مثل:
```
https://job-cho.vercel.app
```

قم بزيارته والتحقق من أن كل شيء يعمل بشكل صحيح! 🎉

---

**هل تحتاج إلى مساعدة؟** 
اتصل بـ Vercel Support أو اسأل في المشروع!
