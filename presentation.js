function showMainPage() {
    document.getElementById('5secspage').style.display = "none";
    document.getElementById('mainPage').style.display = "block";
}

function toMainPage() {
    setTimeout(showMainPage, 5000);
}


window.onload = toMainPage;