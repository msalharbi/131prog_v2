# المشروع التطبيقي — المحاضرة 5

## صفحة «التسجيل في الهاكاثون»

> **المقرر:** مبادئ برمجة صفحات الويب
> **المحاضرة المرجعية:** HTML_lec 05 (النماذج / Forms)
> **المدة المقترحة:** 60 دقيقة
> **الأدوات:** محرّر أكواد (VS Code) + متصفح ويب

> **ملاحظة:** المشروع بـ HTML فقط — بدون CSS. المطلوب صحّة البنية والوسوم لا التنسيق، ويظهر كل عنصر في سطر مستقل باستخدام `<br>`.

---

## نظرة عامة

ستبني صفحة ويب تحتوي **نموذج تسجيل في هاكاثون** يجمع بيانات المشارك واهتماماته وفكرة مشروعه. المشروع يجمع **كل** عناصر المحاضرة: أنواع الإدخال، القوائم، الاختيارات، منطقة النص، خصائص التحقق، وإرسال البيانات.

---

## أهداف المشروع

يُظهر المشروع قدرتك على:

1. بناء نموذج متكامل باستخدام `<form>` وعناصره.
2. استخدام أنواع `<input>` المناسبة لكل بيان.
3. توظيف `<select>` و `<radio>` و `<checkbox>` و `<textarea>` في مواضعها.
4. تطبيق خصائص التحقق (`required`, `placeholder`, `pattern`) و تحديد `method` و `action`.

---

## المتطلبات

أنشئ ملفًا باسم `hackathon.html` يحتوي نموذجًا بالحقول التالية، ولكل حقل تسمية `<label>` مربوطة، ومع `<br>` بعد كل عنصر:

| # | الحقل | المطلوب |
|---|-------|---------|
| 1 | اسم المشارك | حقل نصي، **إلزامي** |
| 2 | البريد الإلكتروني | نوعه `email`، **إلزامي** |
| 3 | رقم الجوال | نوعه `tel`، **إلزامي** + `pattern` يقبل الأرقام فقط |
| 4 | الجهة / الجامعة | حقل نصي |
| 5 | المسار | أزرار `radio` (اختيار واحد): الذكاء الاصطناعي / تطوير الويب / إنترنت الأشياء |
| 6 | التقنيات التي تتقنها | `checkbox` (اختيار متعدد): HTML / CSS / JavaScript / Python |
| 7 | مستوى الخبرة | قائمة منسدلة `<select>`: مبتدئ / متوسط / متقدم |
| 8 | اسم الفريق | حقل نصي |
| 9 | حجم الفريق | نوعه `number` |
| 10 | فكرة المشروع المبدئية | `<textarea>`، **إلزامي** + نص إرشادي |
| 11 | الموافقة على الشروط | `checkbox`، **إلزامي** |
| 12 | الأزرار | زر إرسال (`submit`) وزر إعادة تعيين (`reset`) |

كما يجب أن يحتوي `<form>` على `method="POST"` و `action="register.php"`.

---

## الهيكل المبدئي (اكمل الفراغات بنفسك)

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>التسجيل في الهاكاثون</title>
</head>
<body>

  <h1>التسجيل في الهاكاثون</h1>

  <form action="register.php" method="POST">

    <!-- اسم المشارك: label + input (text) + required + <br> -->
    <!-- البريد: label + input (email) + required + <br> -->
    <!-- رقم الجوال: label + input (tel) + required + pattern + <br> -->
    <!-- الجهة / الجامعة: label + input (text) + <br> -->

    <!-- المسار: 3 أزرار radio لها نفس الـ name + label لكل خيار + <br> -->

    <!-- التقنيات: 4 خانات checkbox + label لكل خيار + <br> -->

    <!-- مستوى الخبرة: label + select فيه 3 options + <br> -->

    <!-- اسم الفريق: label + input (text) + <br> -->
    <!-- حجم الفريق: label + input (number) + <br> -->

    <!-- فكرة المشروع: label + textarea + required + placeholder + <br> -->

    <!-- الموافقة على الشروط: checkbox + label + required + <br> -->

    <!-- زر إرسال + زر إعادة تعيين -->

  </form>

</body>
</html>
```

---

## تلميحات

- اربط كل تسمية بحقلها: قيمة `for` في `<label>` = قيمة `id` في `<input>`.
- أزرار `radio` للمسار تأخذ **نفس `name`** مع `value` مختلفة لكل خيار (اختيار واحد).
- خانات `checkbox` للتقنيات يمكن أن تأخذ نفس `name` مع `value` مختلفة (اختيار متعدد).
- نمط رقم الجوال (10 أرقام مثلًا): `pattern="[0-9]{10}"`.
- زر إعادة التعيين: `<input type="reset" value="إعادة تعيين">`.

---

## قائمة التحقق الذاتية

- [ ] الصفحة تفتح في المتصفح بدون أخطاء.
- [ ] كل حقل له `<label>` مربوطة عبر `for` و `id` متطابقين.
- [ ] استخدمت أنواع `input` المناسبة (text / email / tel / number).
- [ ] المسار أزرار `radio` بنفس `name` (اختيار واحد)، والتقنيات `checkbox` (اختيار متعدد).
- [ ] يوجد `<select>` لمستوى الخبرة و`<textarea>` لفكرة المشروع.
- [ ] الحقول المهمة فيها `required`، ورقم الجوال فيه `pattern`، وفكرة المشروع فيها `placeholder`.
- [ ] `<form>` فيه `method` و `action`، وزرّا إرسال وإعادة تعيين.
- [ ] كل عنصر يظهر في سطر مستقل (`<br>`)، وجميع الوسوم مُغلقة.

---

## نموذج الحل المقترح

> جرّب بنفسك أولًا قبل الاطّلاع على الحل. قد يختلف حلّك في الأسماء والتفاصيل وهذا مقبول.

<details>
<summary>عرض نموذج الحل الكامل</summary>

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>التسجيل في الهاكاثون</title>
</head>
<body>

  <h1>التسجيل في الهاكاثون</h1>

  <form action="register.php" method="POST">

    <label for="name">اسم المشارك:</label><br>
    <input type="text" id="name" name="name" required><br>

    <label for="email">البريد الإلكتروني:</label><br>
    <input type="email" id="email" name="email" required><br>

    <label for="phone">رقم الجوال:</label><br>
    <input type="tel" id="phone" name="phone" required
           pattern="[0-9]{10}" placeholder="05xxxxxxxx"><br>

    <label for="org">الجهة / الجامعة:</label><br>
    <input type="text" id="org" name="org"><br>

    <p>المسار:</p>
    <input type="radio" id="t1" name="track" value="ai" required>
    <label for="t1">الذكاء الاصطناعي</label><br>
    <input type="radio" id="t2" name="track" value="web">
    <label for="t2">تطوير الويب</label><br>
    <input type="radio" id="t3" name="track" value="iot">
    <label for="t3">إنترنت الأشياء</label><br>

    <p>التقنيات التي تتقنها:</p>
    <input type="checkbox" id="s1" name="skills" value="HTML">
    <label for="s1">HTML</label><br>
    <input type="checkbox" id="s2" name="skills" value="CSS">
    <label for="s2">CSS</label><br>
    <input type="checkbox" id="s3" name="skills" value="JavaScript">
    <label for="s3">JavaScript</label><br>
    <input type="checkbox" id="s4" name="skills" value="Python">
    <label for="s4">Python</label><br>

    <label for="level">مستوى الخبرة:</label><br>
    <select id="level" name="level">
      <option value="beginner">مبتدئ</option>
      <option value="intermediate">متوسط</option>
      <option value="advanced">متقدم</option>
    </select><br>

    <label for="team">اسم الفريق:</label><br>
    <input type="text" id="team" name="team"><br>

    <label for="size">حجم الفريق:</label><br>
    <input type="number" id="size" name="size"><br>

    <label for="idea">فكرة المشروع المبدئية:</label><br>
    <textarea id="idea" name="idea" rows="4"
      placeholder="اكتب فكرتك باختصار" required></textarea><br>

    <input type="checkbox" id="agree" name="agree" required>
    <label for="agree">أوافق على شروط المشاركة</label><br>

    <input type="submit" value="تسجيل">
    <input type="reset" value="إعادة تعيين">

  </form>

</body>
</html>
```
</details>

---

> **مرجع سريع**
>
> | المحور | الوسوم / الخصائص |
> |--------|--------|
> | العناصر | `<form>` `<input>` `<label>` `<select>` `<option>` `<textarea>` |
> | أنواع input | `text` `email` `tel` `number` `radio` `checkbox` `submit` `reset` |
> | التحقق | `required` `placeholder` `pattern` |
> | الإرسال | `method` (POST) · `action` |

**بالتوفيق**
