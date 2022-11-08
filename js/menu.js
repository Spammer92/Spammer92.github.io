function openMenu() {
    if (!boolOpenMenu) {
        document.getElementById("header-icon").style.transform = "rotate(-180deg)";
        boolOpenMenu = true;
    } else {
        document.getElementById("header-icon").style.transform = "rotate(0deg)";
        boolOpenMenu = false;
    }
    
}