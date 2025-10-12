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
## الخطوة 2: كتابة الهيكل الأساسي للصفحة

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
     <!--النموذج يبدأ هنا-->
</body>
</html>
```

## الخطوة 3: إنشاء النموذج Form

### المرحلة 1: الأساسيات – نموذج بسيط (حقول نص فقط)

- الهدف: تعريف المتدربين بمفهوم <form> وحقول الإدخال الأساسية. مثال:

```html
<form>
  <label for="name">الاسم:</label><br>
  <input type="text" id="name" name="name"><br><br>

  <label for="email">البريد الإلكتروني:</label><br>
  <input type="email" id="email" name="email"><br><br>

  <input type="submit" value="إرسال">
</form>

```
---
### المرحلة 2: التوسّع – إضافة خيارات وتفاعل

- الهدف: تعريف المتدربين بالخيارات المتعددة والقوائم المنسدلة.
```html
<form>
  <label for="name">الاسم:</label>
  <input type="text" id="name" name="name" required><br><br>

  <label>الجنس:</label><br>
  <input type="radio" id="male" name="gender" value="ذكر">
  <label for="male">ذكر</label><br>
  <input type="radio" id="female" name="gender" value="أنثى">
  <label for="female">أنثى</label><br><br>

  <label for="city">المدينة:</label>
  <select id="city" name="city">
    <option value="">-- اختر المدينة --</option>
    <option value="buraydah">بريدة</option>
    <option value="riyadh">الرياض</option>
    <option value="jeddah">جدة</option>
  </select><br><br>

  <input type="submit" value="إرسال">
</form>

```
---

### المرحلة 3: النموذج المتكامل – تطبيق نهائي (نموذج تواصل)

- الهدف: دمج كل المهارات السابقة في مشروع تطبيقي متكامل.

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
    <form action="register.php" method="POST">
    <h3>نموذج تواصل معنا</h3>
    <label for="fullname">الاسم الكامل:</label><br>
    <input type="text" id="fullname" name="fullname" placeholder="اكتباسمك" required><br><br>
    <label for="email">البريد الإلكتروني:</label><br>
    <input type="email" id="email" name="email" required><br><br>
    <label for="subject">الموضوع:</label><br>
    <select id="subject" name="subject">
        <option value="">-- اختر الموضوع --</option>
        <option value="inquiry">استفسار</option>
        <option value="suggestion">اقتراح</option>
        <option value="problem">مشكلة</option>
    </select><br><br>
    <label for="message">الرسالة:</label><br>
    <textarea id="message" name="message" rows="5" cols="40"><textarea><br><br>
    <input type="checkbox" id="agree" name="agree" required>
    <label for="agree">أوافق على سياسة الخصوصية</label><br><br>
    <input type="submit" value="إرسال">
    <input type="reset" value="مسح">
    </form>
</body>
<html>

```