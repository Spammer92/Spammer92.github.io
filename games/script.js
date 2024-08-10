let table = [];
let setFields = false;



function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }





function onFieldClick(element) {
    if (setFields) {
        table[element.id] = {
            name: prompt(),
            flipped: false
        }
        element.innerHTML = table[element.id].name;
        createCookie('bingocard', JSON.stringify(table));
//        console.log(element);
    } else {
        if (table[element.id] != null) {
            if (confirm("Did you get this Object?")) {
                table[element.id].flipped = true;
                element.classList.add("flipped");
                createCookie('bingocard', JSON.stringify(table));
            }
        }
        
    }
}

function toggleEdit() {
    if (setFields) {
        setFields = false;
        document.getElementById("edit").innerHTML = "Edit";
    } else {
        setFields = true;
        document.getElementById("edit").innerHTML = "Play";
    }
}

function reset() {
    if (confirm("Do you want to reset your Bingo Card?")) {
        for (let i = 0; i < 25; i++) {
            table[i] = null;
            document.getElementById(i).innerHTML = "";
            document.getElementById(i).classList.remove("flipped");
        }
    }
    deleteCookie("bingocard");
}

function reload() {
    if (table.length == 25) {
        for (let i = 0; i < 25; i++) {
            document.getElementById(i).innerHTML = table[i].name;
            if (table[i].flipped) {
                document.getElementById(i).classList.add("flipped");
            }
        }
    } else if (getCookie('bingocard') != "") {
        console.log("Failed to load Cookies")
        table = [];
    }
}

table = JSON.parse(getCookie('bingocard'));