function calculateAge(birthYear) {
    let currentYear = 2025;
    let age = currentYear - birthYear;
    return age;
}

function welcomeUser(name, birthYear) {
    let age = calculateAge(birthYear); // استدعاء الدالة الأولى
    console.log("مرحبًا يا " + name + "! عمرك الآن هو " + age + " سنة.");
} 

welcomeUser("أحمد", 2000);