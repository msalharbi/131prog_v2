# المعمل العملي — المحاضرة 6

## مقدمة إلى CSS والتحكم في مظهر الصفحات

> **المقرر:** مبادئ برمجة صفحات الويب
> **المحاضرة المرجعية:** CSS_lec 01
> **المدة المقترحة:** 110 دقائق
> **الأدوات:** محرر أكواد (VS Code) + متصفح ويب

> **ملاحظة:** نستخدم في هذا المعمل ما درسناه في المحاضرة فقط: المحددات، الألوان، الخطوط، الأحجام، والخلفيات.
> لن نستخدم المسافات (`margin` و `padding`) ولا الإطارات (`border`)، فهذه موضوع المحاضرة القادمة.

---

## أهداف المعمل

بنهاية هذا المعمل يكون المتدرب قد طبق عمليا المهارات التالية:

1. كتابة قاعدة CSS صحيحة (المحدد، الخاصية، القيمة).
2. إضافة CSS بالطرق الثلاث: Inline و Internal و External.
3. ربط ملف CSS خارجي بالصفحة باستخدام `<link>`.
4. استخدام المحددات: العنصر، المعرف `#id`، الفئة `.class`، العام `*`، والجماعي.
5. تنسيق الألوان والخطوط والأحجام والخلفيات.
6. توقع النتيجة عند تعارض القواعد (الأولوية).

---

## المتطلبات المسبقة

- إتمام المحاضرات: HTML_lec 01 → 05، و CSS_lec 01.
- معرفة الوسوم الأساسية والعناصر الدلالية (`header` و `main` و `footer`).
- الوسم `<div>` حاوية تجمع عدة عناصر في صندوق واحد، وسنستخدمه لصندوق «عرض اليوم» حتى نتحكم في خلفيته وحجمه.

---

## التهيئة (قبل البدء)

سنبني في هذا المعمل صفحة **«مقهى الكلية»** خطوة بخطوة. محتوى HTML جاهز، وعملك هو التنسيق.

1. أنشئ مجلدا جديدا باسم `cafe`.
2. بداخله أنشئ ملفا باسم `index.html`.
3. الصق الكود التالي:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مقهى الكلية</title>
</head>
<body>

  <header>
    <h1 id="site-title">مقهى الكلية</h1>
    <p class="slogan">قهوتك المفضلة بين المحاضرات</p>
  </header>

  <main>
    <h2>قائمة المشروبات</h2>

    <h3>قهوة عربية</h3>
    <p class="desc">قهوة بالهيل والزعفران</p>
    <p class="price">5 ريال</p>

    <h3>شاي</h3>
    <p class="desc">شاي أحمر بالنعناع</p>
    <p class="price">3 ريال</p>

    <h3>عصير برتقال</h3>
    <p class="desc">عصير طازج</p>
    <p class="price">8 ريال</p>

    <div id="offer">
      <h2>عرض اليوم</h2>
      <p>كوبان من القهوة العربية</p>
      <p>بسعر 8 ريال</p>
    </div>
  </main>

  <footer>
    <p>ساعات العمل: من 7 صباحا إلى 2 ظهرا</p>
  </footer>

</body>
</html>
```

4. افتح الملف في المتصفح، ولاحظ شكل الصفحة **بدون CSS**.

> بعد كل تعديل: احفظ الملف (`Ctrl+S`) ثم **حدث المتصفح** (`F5`) لرؤية النتيجة.

---

# التمرين 1 — الطريقة الداخلية المدمجة (Inline) — 10 دقائق

**المطلوب:** اجعل الشعار «قهوتك المفضلة بين المحاضرات» باللون البني (`brown`) وبحجم خط `20px`، باستخدام الخاصية `style` داخل الوسم نفسه.

<details>
<summary>تلميح</summary>

في طريقة Inline لا يوجد محدد ولا أقواس `{ }`؛ نكتب التصريحات مباشرة داخل `style=""` ونفصل بينها بـ `;`.
</details>

<details>
<summary>الحل</summary>

```html
<p class="slogan" style="color: brown; font-size: 20px;">قهوتك المفضلة بين المحاضرات</p>
```
</details>

> **سؤال تفكير:** لو أردت تلوين كل الأسعار في الصفحة بالطريقة نفسها، كم مرة ستكتب `style`؟ وما المشكلة في ذلك؟

---

# التمرين 2 — الطريقة الداخلية (Internal) — 10 دقائق

**المطلوب:**
1. **احذف** الخاصية `style` التي أضفتها في التمرين 1.
2. أضف الوسم `<style>` داخل `<head>`، واكتب فيه قاعدتين:
   - العنوان الرئيسي `h1` باللون البني `brown`.
   - كل الفقرات `p` بحجم خط `18px`.

<details>
<summary>تلميح</summary>

داخل `<style>` نكتب القاعدة كاملة: `المحدد { الخاصية: القيمة; }`.
</details>

<details>
<summary>الحل</summary>

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مقهى الكلية</title>
  <style>
    h1 {
      color: brown;
    }

    p {
      font-size: 18px;
    }
  </style>
</head>
```
</details>

> لاحظ: قاعدة واحدة غيرت حجم **كل** الفقرات في الصفحة.

---

# التمرين 3 — الطريقة الخارجية (External) — 15 دقيقة

**المطلوب:**
1. في مجلد `cafe` أنشئ ملفا جديدا باسم `style.css`.
2. **انقل** القاعدتين من `<style>` إلى الملف `style.css` (بدون الوسم `<style>`).
3. احذف الوسم `<style>` من `index.html`.
4. اربط الملف بالصفحة باستخدام `<link>` داخل `<head>`.
5. تأكد أن التنسيق ما زال يظهر في المتصفح.

**هيكل المجلد بعد هذا التمرين:**

```text
cafe/
├── index.html
└── style.css
```

<details>
<summary>تلميح</summary>

الوسم: `<link rel="stylesheet" href="اسم الملف">`. وملف CSS يحتوي القواعد فقط، بدون أي وسوم HTML.
</details>

<details>
<summary>الحل</summary>

`index.html`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مقهى الكلية</title>
  <link rel="stylesheet" href="style.css">
</head>
```

`style.css`:

```css
h1 {
  color: brown;
}

p {
  font-size: 18px;
}
```
</details>

**تجربة خطأ مقصود:** غير `href="style.css"` إلى `href="styles.css"` واحفظ، ثم حدث المتصفح. ماذا حدث للتنسيق؟ لماذا؟ أعد الاسم الصحيح بعد التجربة.

> من الآن فصاعدا نكتب كل التنسيقات في `style.css` فقط.

---

# التمرين 4 — محدد العنصر والمحدد الجماعي — 15 دقيقة

**المطلوب:** أضف إلى `style.css` القواعد التالية:
1. كل العناوين `h2` باللون `darkgreen`.
2. كل العناوين `h3` بالحجم `22px`.
3. اجعل `h1` و `h2` و `footer` في **منتصف** الصفحة (`text-align: center`) بقاعدة **واحدة** فقط.

<details>
<summary>تلميح</summary>

في المحدد الجماعي نفصل بين المحددات بفاصلة: `h1, h2, footer { ... }`.
</details>

<details>
<summary>الحل</summary>

```css
h2 {
  color: darkgreen;
}

h3 {
  font-size: 22px;
}

h1, h2, footer {
  text-align: center;
}
```
</details>

> **سؤال تفكير:** ما الفرق بين كتابة `h1, h2 { }` بفاصلة، وكتابة ثلاث قواعد منفصلة لها نفس التصريحات؟

---

# التمرين 5 — محدد المعرف (id) ومحدد الفئة (class) — 20 دقيقة

## 5.1 محدد الفئة `.class`

**المطلوب:**
1. كل الأسعار (`class="price"`) باللون الأحمر `#c0392b` وبخط عريض.
2. كل الأوصاف (`class="desc"`) باللون الرمادي `gray`.

<details>
<summary>الحل</summary>

```css
.price {
  color: #c0392b;
  font-weight: bold;
}

.desc {
  color: gray;
}
```
</details>

## 5.2 محدد المعرف `#id`

**المطلوب:** صندوق العرض (`id="offer"`) بخلفية لونها `lightyellow`.

<details>
<summary>تلميح</summary>

المعرف يكتب في CSS بالرمز `#` متبوعا باسمه، والفئة بالنقطة `.` متبوعة باسمها.
</details>

<details>
<summary>الحل</summary>

```css
#offer {
  background-color: lightyellow;
}
```
</details>

## 5.3 أضف class بنفسك

**المطلوب:** اجعل سعر العرض «بسعر 8 ريال» داخل `#offer` يظهر باللون الأحمر وبخط عريض مثل باقي الأسعار، **دون كتابة أي قاعدة CSS جديدة**.

<details>
<summary>تلميح</summary>

القاعدة `.price` موجودة مسبقا، ويمكن إعطاء الفئة نفسها لأي عنصر في الصفحة.
</details>

<details>
<summary>الحل</summary>

```html
<p class="price">بسعر 8 ريال</p>
```
</details>

> **سؤال تفكير:** لماذا استخدمنا `class` للأسعار، و `id` لصندوق العرض؟

---

# التمرين 6 — المحدد العام والخطوط — 10 دقائق

**المطلوب:**
1. باستخدام المحدد العام `*` اجعل خط الصفحة كلها `Tahoma` مع خط احتياطي `sans-serif`.
2. اجعل حجم خط العنوان الرئيسي (`#site-title`) يساوي `40px`.

<details>
<summary>تلميح</summary>

في `font-family` نكتب أكثر من خط مفصولة بفاصلة: إذا لم يتوفر الأول يستخدم المتصفح التالي.
</details>

<details>
<summary>الحل</summary>

```css
* {
  font-family: Tahoma, sans-serif;
}

#site-title {
  font-size: 40px;
}
```
</details>

---

# التمرين 7 — الألوان والخلفيات والأحجام — 20 دقيقة

**المطلوب:**
1. خلفية الصفحة كلها (`body`) بلون **Hex**: `#fdf6ec`.
2. خلفية رأس الصفحة (`header`) بلون **RGB**: `rgb(111, 78, 55)`، ونص الشعار `.slogan` أبيض `white` وفي المنتصف.
   - لاحظ: العنوان `h1` بني على خلفية بنية؛ غير لونه إلى `white` أيضا.
3. صندوق العرض `#offer`:
   - العرض `400px` والارتفاع `150px`.
4. التذييل `footer`: خلفية `#333333` ولون النص `white`.

<details>
<summary>تلميح</summary>

- `color` للون النص، و `background-color` للون الخلفية.
- عند تعديل قاعدة موجودة (مثل `h1` و `#offer`) أضف التصريح الجديد داخلها بدل كتابة قاعدة جديدة.
</details>

<details>
<summary>الحل</summary>

```css
body {
  background-color: #fdf6ec;
}

header {
  background-color: rgb(111, 78, 55);
}

.slogan {
  color: white;
  text-align: center;
}

h1 {
  color: white;
}

#offer {
  background-color: lightyellow;
  width: 400px;
  height: 150px;
}

footer {
  background-color: #333333;
  color: white;
}
```
</details>

**تحد إضافي (اختياري):** ضع صورة باسم `bg.jpg` في مجلد `cafe`، واجعلها خلفية للرأس `header` تغطي مساحته كاملة.

<details>
<summary>الحل</summary>

```css
header {
  background-color: rgb(111, 78, 55);
  background-image: url("bg.jpg");
  background-size: cover;
}
```

> نبقي `background-color` حتى يظهر اللون إذا لم تحمل الصورة.
</details>

---

# التمرين 8 — من يفوز؟ (الأولوية) — 10 دقائق

**المطلوب:** **توقع** النتيجة أولا، ثم جرب بنفسك.

1. في `style.css` أضف القاعدة: `.desc { color: blue; }` في **آخر** الملف.
2. في `index.html` أضف إلى وصف الشاي فقط: `style="color: green;"`.

**الأسئلة:**
- ما لون وصف «القهوة العربية»؟
- ما لون وصف «الشاي»؟
- لماذا لم يبق لون الأوصاف رماديا كما كتبناه في التمرين 5؟

<details>
<summary>الإجابة</summary>

- وصف القهوة العربية **أزرق**: القاعدتان `.desc` في الملف نفسه، والمكتوبة أخيرا هي التي تطبق.
- وصف الشاي **أخضر**: التنسيق المدمج (Inline) له الأولوية الأعلى.
- القاعدة الأخيرة `color: blue` غلبت القاعدة الأولى `color: gray` لأنها جاءت بعدها.

بعد التجربة: احذف القاعدة `color: blue` والخاصية `style` لتعود الأوصاف رمادية.
</details>

---

## الحل الكامل للملف `style.css`

<details>
<summary>اعرض الملف كاملا (بعد التمارين 3 إلى 7)</summary>

```css
/* Global - الخط العام */
* {
  font-family: Tahoma, sans-serif;
}

body {
  background-color: #fdf6ec;
}

/* Header - رأس الصفحة */
header {
  background-color: rgb(111, 78, 55);
}

h1 {
  color: white;
}

#site-title {
  font-size: 40px;
}

.slogan {
  color: white;
  text-align: center;
}

/* Menu - القائمة */
p {
  font-size: 18px;
}

h2 {
  color: darkgreen;
}

h3 {
  font-size: 22px;
}

h1, h2, footer {
  text-align: center;
}

.price {
  color: #c0392b;
  font-weight: bold;
}

.desc {
  color: gray;
}

/* Offer - صندوق العرض */
#offer {
  background-color: lightyellow;
  width: 400px;
  height: 150px;
}

/* Footer - التذييل */
footer {
  background-color: #333333;
  color: white;
}
```
</details>

---

## قائمة التحقق الذاتية

راجع عملك بنفسك، وتأكد من النقاط التالية:

- [ ] ملف `style.css` في المجلد نفسه مع `index.html`، ومرتبط بـ `<link>` داخل `<head>`.
- [ ] لا يوجد وسم `<style>` ولا خاصية `style` متبقية في `index.html`.
- [ ] كل قاعدة مكتوبة بالشكل الصحيح: `المحدد { الخاصية: القيمة; }`.
- [ ] كل تصريح ينتهي بـ `;`، ولكل قوس `{` قوس مغلق `}`.
- [ ] لا توجد مسافة بين الرقم والوحدة (`40px` وليس `40 px`).
- [ ] استخدمت محدد العنصر، و `.class`، و `#id`، و `*`، والمحدد الجماعي.
- [ ] استخدمت الألوان بالصيغ الثلاث: الاسم، و Hex، و RGB.
- [ ] استخدمت `width` و `height` و `background-color`.
- [ ] الأسعار كلها حمراء بقاعدة واحدة فقط (`.price`).
- [ ] تستطيع أن تشرح لماذا يفوز التنسيق المدمج على باقي القواعد.

---

> **مرجع سريع**
>
> | المحور | ما تعلمناه |
> |--------|--------|
> | طرق الإضافة | `style=""` (Inline) · `<style>` (Internal) · `<link rel="stylesheet" href="style.css">` (External) |
> | المحددات | `p` · `#id` · `.class` · `*` · `h1, h2` |
> | الألوان | `color` · `background-color` — `red` · `#ff5733` · `rgb(0, 128, 255)` |
> | الخطوط | `font-family` · `font-size` · `font-weight` · `text-align` |
> | الأحجام | `width` · `height` |
> | الخلفيات | `background-color` · `background-image: url("bg.jpg")` · `background-size: cover` |

**بالتوفيق**
