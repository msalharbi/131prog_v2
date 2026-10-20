# المعمل العملي — المحاضرة 5

## النماذج (Forms) في HTML

> **المقرر:** مبادئ برمجة صفحات الويب
> **المحاضرة المرجعية:** HTML_lec 05
> **المدة المقترحة:** 90 دقيقة
> **الأدوات:** محرّر أكواد (VS Code) + متصفح ويب

> **ملاحظة:** المعمل بـ HTML فقط — بدون CSS. المطلوب صحّة البنية والوسوم لا التنسيق.
> ولأننا لم نبدأ CSS بعد، نضع `<br>` بعد كل عنصر لعرضه في سطر مستقل (سننسّق الصفحة لاحقًا بـ CSS).

---

## أهداف المعمل

بنهاية هذا المعمل يكون المتدرب قد **طبّق عمليًّا** المهارات التالية:

1. إنشاء نموذج باستخدام `<form>` وعناصره الأساسية.
2. استخدام أنواع `<input>` المناسبة لكل نوع بيانات.
3. ربط التسميات `<label>` بالحقول عبر `for` و `id`.
4. استخدام القائمة المنسدلة `<select>` ومنطقة النص `<textarea>`.
5. تطبيق خصائص التحقق (`required`, `placeholder`, `maxlength`, `pattern`).
6. تحديد طريقة الإرسال عبر `method` و `action`.

---

## المتطلبات المسبقة

- إتمام المحاضرات: HTML_lec 01 → 05.
- معرفة الوسوم الأساسية والعناصر الدلالية.

---

## التهيئة (قبل البدء)

1. أنشئ مجلدًا جديدًا باسم `forms`.
2. بداخله أنشئ ملفًا باسم `index.html`.
3. الصق القالب الأساسي التالي، وسنبني عليه في كل تمرين:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>معمل النماذج</title>
</head>
<body>

  <!-- اكتب أكواد التمارين هنا -->

</body>
</html>
```

> بعد كل تعديل: احفظ الملف (`Ctrl+S`) ثم **حدّث المتصفح** (`F5`) لرؤية النتيجة.

---

# التمرين 1 — أول نموذج — 15 دقيقة

**المطلوب:** أنشئ نموذجًا بسيطًا يحتوي على حقل «الاسم» وزر «إرسال».

**خطوات:**
1. ابدأ بالوسم `<form>`.
2. أضف `<label>` مربوطة بحقل `<input type="text">`.
3. أضف زر إرسال `<input type="submit">`.
4. ضع `<br>` بعد كل عنصر (التسمية والحقل) ليظهر في سطر مستقل.

<details>
<summary>تلميح</summary>

لربط التسمية بالحقل: قيمة `for` في `<label>` = قيمة `id` في `<input>`.
</details>

<details>
<summary>الحل</summary>

```html
<form>
  <label for="name">الاسم:</label><br>
  <input type="text" id="name" name="name"><br>

  <input type="submit" value="إرسال">
</form>
```
</details>

---

# التمرين 2 — أنواع الإدخال — 20 دقيقة

**المطلوب:** أنشئ نموذج «بيانات الحساب» يحتوي على الحقول التالية، كلٌّ منها بتسمية `<label>` خاصة:

- الاسم (نص)
- البريد الإلكتروني (email)
- كلمة المرور (password)
- العمر (number)
- تاريخ الميلاد (date)

<details>
<summary>تلميح</summary>

غيّر قيمة `type` في `<input>` حسب نوع الحقل: `text` / `email` / `password` / `number` / `date`.
</details>

<details>
<summary>الحل</summary>

```html
<form>
  <label for="uname">الاسم:</label><br>
  <input type="text" id="uname" name="uname"><br>

  <label for="email">البريد الإلكتروني:</label><br>
  <input type="email" id="email" name="email"><br>

  <label for="pass">كلمة المرور:</label><br>
  <input type="password" id="pass" name="pass"><br>

  <label for="age">العمر:</label><br>
  <input type="number" id="age" name="age"><br>

  <label for="bdate">تاريخ الميلاد:</label><br>
  <input type="date" id="bdate" name="bdate"><br>

  <input type="submit" value="تسجيل">
</form>
```
</details>

---

# التمرين 3 — الاختيارات: radio و checkbox — 20 دقيقة

## 3.1 الأزرار الاختيارية `radio` (اختيار واحد)

**المطلوب:** أضف سؤال «لغتك المفضّلة» بثلاثة خيارات (HTML / CSS / JavaScript)، يُسمح باختيار واحد فقط.

<details>
<summary>تلميح</summary>

لجعل الخيارات مجموعة واحدة (اختيار واحد فقط)، امنحها **نفس قيمة `name`**. وضع `<br>` بعد تسمية كل خيار يجعله في سطر مستقل.
</details>

<details>
<summary>الحل</summary>

```html
<p>لغتك المفضّلة:</p>

<input type="radio" id="html" name="lang" value="HTML">
<label for="html">HTML</label><br>

<input type="radio" id="css" name="lang" value="CSS">
<label for="css">CSS</label><br>

<input type="radio" id="js" name="lang" value="JavaScript">
<label for="js">JavaScript</label><br>
```
</details>

## 3.2 مربعات الاختيار `checkbox` (اختيار متعدد)

**المطلوب:** أضف سؤال «اهتماماتك» بثلاثة خيارات يمكن اختيار أكثر من واحد (الرياضة / البرمجة / القراءة).

<details>
<summary>الحل</summary>

```html
<p>اهتماماتك:</p>

<input type="checkbox" id="i1" name="interest" value="Sport">
<label for="i1">الرياضة</label><br>

<input type="checkbox" id="i2" name="interest" value="Prog">
<label for="i2">البرمجة</label><br>

<input type="checkbox" id="i3" name="interest" value="Reading">
<label for="i3">القراءة</label><br>
```
</details>

> **سؤال تفكير:** متى تستخدم `radio` ومتى تستخدم `checkbox`؟

---

# التمرين 4 — select و textarea — 15 دقيقة

**المطلوب:**
1. أضف قائمة منسدلة «الموضوع» بخيارات: استفسار / مشكلة تقنية / أخرى.
2. أضف منطقة نص «رسالتك» بأربعة أسطر ونص إرشادي.

<details>
<summary>تلميح</summary>

- كل خيار في القائمة = `<option>` داخل `<select>`.
- عدد أسطر منطقة النص عبر الخاصية `rows`، والنص الإرشادي عبر `placeholder`.
</details>

<details>
<summary>الحل</summary>

```html
<label for="subject">الموضوع:</label><br>
<select id="subject" name="subject">
  <option value="ask">استفسار</option>
  <option value="tech">مشكلة تقنية</option>
  <option value="other">أخرى</option>
</select><br>

<label for="msg">رسالتك:</label><br>
<textarea id="msg" name="msg" rows="4" placeholder="اكتب رسالتك هنا"></textarea><br>
```
</details>

---

# التمرين 5 — تحسين التجربة والتحقق — 15 دقيقة

**المطلوب:** أنشئ حقل «رقم الهاتف» بحيث:
- يكون **إلزاميًّا**.
- يعرض نصًّا إرشاديًّا.
- لا يتجاوز 10 أرقام.
- يقبل الأرقام فقط (نمط من 10 أرقام).

<details>
<summary>تلميح</summary>

الخصائص: `required` للإلزام، `placeholder` للنص الإرشادي، `maxlength` للحد الأقصى، `pattern` للنمط (`[0-9]{10}` = عشرة أرقام).
</details>

<details>
<summary>الحل</summary>

```html
<label for="phone">رقم الهاتف:</label><br>
<input type="text" id="phone" name="phone"
       required
       placeholder="أدخل رقم الهاتف"
       maxlength="10"
       pattern="[0-9]{10}"><br>
```
</details>

---

# التمرين 6 — إرسال البيانات — 10 دقائق

**المطلوب:** اجعل نموذجك يرسل بياناته إلى ملف `register.php` باستخدام طريقة `POST`.

<details>
<summary>تلميح</summary>

الخاصية `action` تحدد ملف المعالجة على الخادم، والخاصية `method` تحدد طريقة الإرسال (`GET` أو `POST`).
</details>

<details>
<summary>الحل</summary>

```html
<form action="result.html" method="get">
  <input name="username">
  <input name="age">
  <button type="submit">إرسال</button>
</form>
```
</details>

> **سؤال تفكير:** ما الفرق بين `GET` و `POST` في طريقة إرسال البيانات؟

---

# المشروع الختامي — صفحة «نموذج تواصل» — 30 دقيقة

اجمع كل المهارات في صفحة واحدة باسم `contactme.html` تحتوي نموذج تواصل متكامل.

## المتطلبات (يجب أن يحتوي النموذج على):

| # | المتطلب | المهارة |
|---|---------|---------|
| 1 | `<form>` بخصائص `method="GET"` و `action="register.php"` | form |
| 2 | الاسم الكامل، البريد الإلكتروني، رقم الهاتف (حقول `input` بأنواع مناسبة) | input |
| 3 | الموضوع عبر قائمة منسدلة `<select>` (استفسار / مشكلة تقنية / تعاون / أخرى) | select |
| 4 | رسالة المستخدم عبر `<textarea>` | textarea |
| 5 | طريقة التواصل المفضّلة عبر `radio` (بريد / هاتف) | radio |
| 6 | الموافقة على الشروط عبر `checkbox` | checkbox |
| 7 | تسمية `<label>` مربوطة لكل حقل | label |
| 8 | زر إرسال (`submit`) وزر إعادة تعيين (`reset`) | الأزرار |

> ضع `<br>` بعد كل عنصر (التسمية والحقل) ليظهر كلٌّ في سطر مستقل.

## الهيكل المقترح (اكمل الفراغات بنفسك):

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>نموذج التواصل</title>
</head>
<body>

  <h1>نموذج التواصل</h1>

  <form action="register.php" method="GET">

    <!-- الاسم الكامل: label + input + <br> -->
    <!-- البريد الإلكتروني: label + input + <br> -->
    <!-- رقم الهاتف: label + input + <br> -->

    <!-- الموضوع: label + <select> + <br> -->

    <!-- رسالتك: label + <textarea> + <br> -->

    <!-- طريقة التواصل المفضّلة: radio + label لكل خيار + <br> -->

    <!-- الموافقة على الشروط: checkbox + label + <br> -->

    <!-- زر إرسال + زر إعادة تعيين -->

  </form>

</body>
</html>
```

---

## قائمة التحقق الذاتية

راجع عملك بنفسك، وتأكّد من النقاط التالية:

- [ ] الصفحة تفتح في المتصفح بدون أخطاء.
- [ ] كل حقل له `<label>` مربوطة به عبر `for` و `id` متطابقين.
- [ ] كل عنصر يظهر في سطر مستقل (باستخدام `<br>`).
- [ ] استخدمت أنواع `input` المناسبة (نص، بريد، رقم، هاتف…).
- [ ] خيارات `radio` لها نفس `name` (اختيار واحد فقط).
- [ ] يوجد قائمة منسدلة `<select>` ومنطقة نص `<textarea>`.
- [ ] استخدمت خصائص التحقق (`required` على الأقل).
- [ ] النموذج فيه `action` و `method`، وزرّا إرسال وإعادة تعيين.
- [ ] جميع الوسوم مُغلقة بشكل صحيح.

---

> **مرجع سريع لعناصر النماذج**
>
> | المحور | الوسوم / الخصائص |
> |--------|--------|
> | العناصر | `<form>` `<input>` `<label>` `<select>` `<option>` `<textarea>` `<button>` |
> | أنواع input | `text` `email` `password` `number` `date` `tel` `radio` `checkbox` `submit` `reset` |
> | التحقق | `required` `placeholder` `maxlength` `pattern` |
> | الإرسال | `method` (GET / POST) · `action` |

**بالتوفيق**
