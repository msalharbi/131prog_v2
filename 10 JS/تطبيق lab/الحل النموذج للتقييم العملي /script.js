function calcTotal() {
  let price = parseFloat(document.getElementById("price").value);
  let qty = parseInt(document.getElementById("qty").value);
  let output = document.getElementById("result");


  let total = price * qty;
  let final = addTax(total);
  output.textContent = " الإجمالي مع الضريبة: " + final.toFixed(2) + " ريال";
  output.style.color = "green";
}

function addTax(total) {
  return total + (total * 0.15);
}

function checkEmail() {
  let email = document.getElementById("email").value;
  let msg = document.getElementById("emailMsg");
  let sendBtn = document.getElementById("sendInvoice");

  if (email.includes("@") && email.includes(".")) {
    msg.textContent = " بريد صحيح";
    msg.style.color = "green";
    sendBtn.style.display = "inline-block"; // إظهار الزر
  } else {
    msg.textContent = " بريد غير صالح";
    msg.style.color = "red";
    sendBtn.style.display = "none"; // إخفاء الزر
  }
}

function sendInvoice() {
  let email = document.getElementById("email").value;
  document.getElementById("invoiceMsg").textContent = 
    " تم إرسال الفاتورة إلى البريد: " + email;
  document.getElementById("invoiceMsg").style.color = "green";
}
