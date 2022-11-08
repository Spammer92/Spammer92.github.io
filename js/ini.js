if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("header-desktop").style.display = "none";
    document.getElementById("header-mobile").style.display = "grid";
} else {
    document.getElementById("header-desktop").style.display = "flex";
    document.getElementById("header-mobile").style.display = "none";
}

function openGithub() {
    window.open("https:github.com/Spammer92");
}

function sizeUp(id) {
    if (!boolOpenMenu) {
        document.getElementById(id).style.transform = "scale(125%)";
    }
}

function sizeDown(id) {
    if (!boolOpenMenu) {
        document.getElementById(id).style.transform = "scale(100%)";
    }
}