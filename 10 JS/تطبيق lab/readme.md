# تطبيق عملي: التعامل مع الأحداث (JavaScript Events)

##  الهدف
تعرف على كيفية التفاعل مع المستخدم عبر الأحداث المختلفة في JavaScript مثل:
- الضغط على الأزرار (`onclick`)
- تمرير الفأرة (`onmouseover`, `onmouseout`)
- الكتابة في الحقول (`oninput`)
- إرسال النماذج (`onsubmit`)

---

## المثال 1: تغيير النص عند الضغط على الزر

عند الضغط على الزر، يتغير النص في الفقرة المجاورة.

```html
<button onclick="changeText()">اضغط هنا</button>
<p id="demo">نص تجريبي</p>

<script>
function changeText() {
  document.getElementById("demo").innerHTML = "تم الضغط!";
}
</script>
```

## المثال 2: تغيير لون النص عند تمرير الفأرة
عند تمرير الفأرة على النص يتغير لونه، وعند إخراجها يعود للون الأصلي
```html
<h1 id="demo"
    onmouseover="mouseOver()"
    onmouseout="mouseOut()">مرر الفأرة هنا</h1>

<script>
function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}
</script>
```

## المثال 3: تغيير لون خلفية مربع عند تمرير الفأرة
عند المرور على المربع تتغير خلفيته إلى الأخضر الفاتح، وعند الخروج تعود للأزرق الفاتح.
```html
<div id="colorBox" onmouseover="mouseOver()" onmouseout="mouseOut()"></div>

<style>
#colorBox {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  border: 1px solid black;
}
</style>

<script>
function mouseOver() {
  document.getElementById("colorBox").style.backgroundColor = "lightgreen";
}

function mouseOut() {
  document.getElementById("colorBox").style.backgroundColor = "lightblue";
}
</script>

```

## المثال 4: التحقق من البريد الإلكتروني أثناء الكتابة
يعرض رسالة خطأ إن لم يكن البريد يحتوي على الرمز @.
```html
<input type="email" id="emailInput" oninput="checkEmail()" placeholder="أدخل بريدك الإلكتروني">
<p id="errorMsg" style="color:red;"></p>

<script>
function checkEmail(){
  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("errorMsg");
  
  if (!email.includes("@")) {
    message.textContent = "الرجاء إدخال بريد إلكتروني صحيح";
  } else {
    message.textContent = "";
  }
}
</script>

```

### المثال 5: التحقق من الاسم قبل إرسال النموذج
إذا كان الاسم فارغًا يمنع إرسال النموذج ويظهر تنبيه للمستخدم.
```html
<form id="myForm" onsubmit="return validateForm()">
  <input type="text" id="name" placeholder="أدخل اسمك">
  <button type="submit">إرسال</button>
</form>

<script>
function validateForm() {
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("الاسم مطلوب!");
    return false; // يمنع الإرسال
  }
  return true; // يسمح بالإرسال
}
</script>

```