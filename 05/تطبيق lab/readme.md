# تطبيق عملي: إنشاء نموذج تواصل باستخدام HTML Forms

## الأهداف
- التعرف على عناصر النماذج الأساسية في HTML.  
- استخدام حقول الإدخال `<input>` وأنواعها المختلفة.  
- ربط عناصر النموذج مع التسميات `<label>`.  
- استخدام القائمة المنسدلة `<select>`، ومربع النص المتعدد `<textarea>`.  
- إضافة خصائص لتحسين تجربة المستخدم (placeholder، required، maxlength).  
- تجربة إرسال البيانات باستخدام `method` و `action`.

---

## الخطوة 1: إنشاء المشروع
1. أنشئ مجلدًا جديدًا باسم: `forms`
2. افتح المجلد في **Visual Studio Code**.  
3. أنشئ ملفًا جديدًا باسم: `contactme.html`


---

## الخطوة 2: كتابة الهيكل الأساسي للنموذج

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>نموذج التواصل</title>
</head>
<body>

 <h1>نموذج التواصل</h1>

 <form action="register.php" method="GET">
     <!-- الاسم الكامل -->
     <label for="fullname">الاسم الكامل:</label><br>
     <input type="text" id="fullname" name="fullname" placeholder="اكتب اسمك الكامل" required><br><br>

     <!-- البريد الإلكتروني -->
     <label for="email">البريد الإلكتروني:</label><br>
     <input type="email" id="email" name="email" placeholder="example@email.com" required><br><br>

     <!-- رقم الهاتف -->
     <label for="phone">رقم الهاتف:</label><br>
     <input type="tel" id="phone" name="phone" placeholder="05xxxxxxxx"><br><br>

     <!-- الموضوع -->
     <label for="subject">الموضوع:</label><br>
     <select id="subject" name="subject" required>
         <option value="">-- اختر الموضوع --</option>
         <option value="inquiry">استفسار</option>
         <option value="problem">مشكلة تقنية</option>
         <option value="collaboration">تعاون</option>
         <option value="other">أخرى</option>
     </select><br><br>

     <!-- الرسالة -->
     <label for="message">الرسالة:</label><br>
     <textarea id="message" name="message" rows="5" cols="40" placeholder="اكتب رسالتك هنا..."></textarea><br><br>

     <!-- طريقة التواصل المفضلة -->
     <p><strong>طريقة التواصل المفضلة:</strong></p>
     <input type="radio" id="contact_email" name="contact_method" value="email">
     <label for="contact_email">البريد الإلكتروني</label><br>
     <input type="radio" id="contact_phone" name="contact_method" value="phone">
     <label for="contact_phone">الهاتف</label><br><br>

     <!-- الموافقة على الشروط -->
     <input type="checkbox" id="agree" name="agree" required>
     <label for="agree">أوافق على الشروط والأحكام</label><br><br>

     <!-- الأزرار -->
     <input type="submit" value="إرسال">
     <input type="reset" value="إعادة تعيين">
 </form>

</body>
</html>
```
---

## الخطوة 3: تحسين النموذج

- أضف خاصية maxlength="30" لحقل الاسم لتحديد أقصى عدد للأحرف.
- أضف خاصية pattern="[0-9]{10}" لحقل رقم الهاتف لضمان إدخال 10 أرقام فقط.
- غيّر method="POST" لتجربة الفرق بين GET و POST.

---

## ملاحظات مهمة

- استخدم label for لربط التسميات بعناصر الإدخال.
- استخدم placeholder لتوضيح المطلوب من المستخدم.
- عند الضغط على زر الإرسال، يتم إرسال البيانات إلى الصفحة register.php.
- عند الضغط على “إعادة تعيين”، يتم مسح الحقول وإعادتها إلى حالتها الافتراضية.
---

## التحدي الإضافي

- أضف حقلًا لاختيار تاريخ التواصل المفضل باستخدام:
```html
<input type="date" name="contact_date">
```

- أضف زرًا تجريبيًا ينفذ كود JavaScript بسيط:
```html
<input type="button" value="عرض تنبيه" onclick="alert('تم النقر!')">
```