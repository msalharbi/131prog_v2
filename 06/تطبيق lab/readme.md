# التطبيق العملي – مقدمة في CSS

## الأهداف
- فهم طرق إدراج CSS في صفحات الويب.
- تطبيق محددات CSS المختلفة (العنصر، الفئة، المعرف، العام، الجماعي).
- تنسيق النصوص والألوان والخلفيات.

---

## الخطوة 1: إنشاء المجلد
أنشئ مجلدًا باسم:
`lab_css01`
ثم أضف داخله ملفين:
- `index.html`
- `style.css`

---

## الخطوة 2: إعداد صفحة HTML

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تجربة CSS</title>
    <!-- ربط ملف CSS خارجي -->
    <link rel="stylesheet" href="style.css">
    <style>
        /* CSS داخلي */
        h2 {
            color: darkgreen;
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <h1 style="color: blue;">مرحبًا بكم في أول تجربة CSS</h1> <!-- CSS مدمج -->

    <h2>تنسيق داخلي باستخدام CSS</h2>

    <p>CSS تُستخدم للتحكم في <span class="highlight">ألوان</span> وخطوط وتخطيط صفحات الويب.</p>

    <div id="info-box">
        <h3>حول CSS</h3>
        <p>CSS تعني <strong>Cascading Style Sheets</strong> وتُستخدم لفصل التصميم عن المحتوى.</p>
    </div>

    <div class="section">
        <h3>أنواع المحددات</h3>
        <ul>
            <li>محدد العنصر (Element)</li>
            <li>محدد الفئة (Class)</li>
            <li>محدد المعرف (ID)</li>
            <li>المحدد العام (*)</li>
            <li>المحدد الجماعي (,)</li>
        </ul>
    </div>

    <footer>
        <p>© 2025 جميع الحقوق محفوظة.</p>
    </footer>

</body>
</html>
```

## الخطوة 3: إعداد ملف CSS الخارجي
```css
/* محدد عام */
* {
    font-family: "Tahoma", sans-serif;
    direction: rtl;
}

/* محدد عنصر */
p {
    color: #333;
    line-height: 1.6;
}

/* محدد فئة */
.highlight {
    color: crimson;
    font-weight: bold;
}

/* محدد معرف */
#info-box {
    background-color: #f0f0f0;
    border: 2px solid #999;
    padding: 10px;
    margin: 10px 0;
}

/* محدد جماعي */
h3, footer {
    color: darkslateblue;
}

/* تغيير الخلفية */
body {
    background-color: #fafafa;
}

```