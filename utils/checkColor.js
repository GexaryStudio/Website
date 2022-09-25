const root = document.querySelector(":root");
let isDark = true;

function light() {
    root.style.setProperty("--first-light", "#2c3e50");
    root.style.setProperty("--second-dark", "#bdc3c7");
    root.style.setProperty("--first-dark", "#ecf0f1");
}
function dark() {
    root.style.setProperty("--first-light", "#ecf0f1");
    root.style.setProperty("--second-dark", "#2c3e50");
    root.style.setProperty("--first-dark", "#34495e");
}

function checkColor() {
    if (isDark) {
        light();
        isDark = false;
    } else {
        dark();
        isDark = true;
    }
}
