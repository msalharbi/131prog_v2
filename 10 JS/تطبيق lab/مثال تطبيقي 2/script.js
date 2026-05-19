function processForm(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;


    let interests = [];

    if( document.getElementById("web").checked){
        interests.push("تطوير الويب");
    }

    if( document.getElementById("ai").checked){
        interests.push("الذكاء الاصطناعي");
    }

    const output = document.getElementById("output");

    output.innerHTML = `
        <h3>تم استلام النموذج بنجاح</h3>
        <p><strong>الاسم: </strong>${name}</p>
        <p><strong>البريد: </strong>${email}</p>
        <p><strong>المدينة: </strong>${city}</p>
        <p><strong>الاهتمامات: </strong>${interests.join(" - ") || "لم يتم اختيار اهتمامات"}</p>
        `
    ;




}