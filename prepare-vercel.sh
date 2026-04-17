#!/bin/bash

# Vercel Pre-deployment Checklist Script

echo "🚀 بدء فحص الجاهزية لنشر Vercel..."
echo ""

# 1. Check Node version
echo "✓ فحص إصدار Node..."
node --version
npm --version
echo ""

# 2. Clean install
echo "✓ تثبيت الحزم..."
npm install
echo ""

# 3. Lint check
echo "✓ فحص الأخطاء..."
npm run lint || echo "⚠ بعض تحذيرات linting (اختيارية)"
echo ""

# 4. Build check
echo "✓ فحص البناء..."
npm run build
if [ $? -eq 0 ]; then
  echo "✅ البناء نجح!"
else
  echo "❌ البناء فشل!"
  exit 1
fi
echo ""

# 5. Check dist folder
echo "✓ التحقق من مجلد dist..."
if [ -d "dist" ]; then
  echo "✅ مجلد dist موجود"
  ls -la dist | head -10
else
  echo "❌ مجلد dist غير موجود!"
  exit 1
fi
echo ""

echo "🎉 المشروع جاهز للنشر على Vercel!"
