# مميزات HTML5

## مقدمة
- HTML5 هو الإصدار الأحدث من لغة **HTML** والذي تم اعتماده بشكل رسمي عام 2014.
- جاء ليحل مكان الإصدارات السابقة ويوفر إمكانيات متطورة تدعم الويب الحديث.
- أغلب المتصفحات الحديثة (Chrome, Firefox, Safari, Edge) تدعم HTML5 بشكل كامل.

---

## أهم المميزات في HTML5

### 1. العناصر الدلالية (Semantic Elements)
- مثل: `<header>`, `<footer>`, `<article>`, `<section>`.
- تساعد في جعل الصفحة أكثر وضوحًا لمحركات البحث وتقنيات الوصول (Accessibility).
- تجعل الكود أكثر تنظيمًا وسهولة في القراءة.

---

### 2. دعم الوسائط المتعددة (Audio & Video)
- وسوم جديدة: `<audio>` و `<video>`.
- لم تعد هناك حاجة لاستخدام إضافات مثل Flash لتشغيل ملفات الصوت والفيديو.
- يمكن التحكم في التشغيل عبر خصائص مثل `controls`, `autoplay`, `loop`.

مثال:
```html
<video width="300" height="200" controls autoplay>
        <source src="lesson.mp4" type="video/mp4"/>
</video>
<audio controls>
        <source src="quran.mp3" type="audio/mp3"/>
</audio>
```

---

### 3. عنصر الرسم (Canvas Element)
- الوسم `<canvas>` يُستخدم للرسم ثنائي الأبعاد مباشرة في المتصفح.
- يسمح بإنشاء ألعاب ورسومات تفاعلية باستخدام JavaScript.
```html
 <canvas width="200" height="600" style="border: 5px dashed #da0909;">canvas</canvas>
```
---

### 4. السحب والإفلات (Drag & Drop API)
- يمكن للمستخدم سحب العناصر داخل الصفحة وإفلاتها في أماكن مختلفة.
- مفيد لبناء تطبيقات ويب تفاعلية مثل إدارة الملفات أو واجهات السحب (Drag & Drop).

---

### 5. تحسينات النماذج (Form Enhancements)
- أنواع جديدة من الحقول مثل:
  - `email`, `url`, `date`, `number`, `range`, `color`.
- خصائص جديدة مثل:
  - `required`, `placeholder`, `pattern`, `autofocus`.
- تجعل التحقق من صحة البيانات أسهل وأكثر تفاعلية.

مثال:
```html
<form>
  <input type="email" required placeholder="أدخل بريدك الإلكتروني">
  <input type="date">
  <input type="color">
  <button type="submit">إرسال</button>
</form>
```
