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