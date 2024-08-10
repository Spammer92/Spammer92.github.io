if (typeof(Storage) == "undefined") {
    location.replace("https://spammer92.github.io");
}

let table = [];
let setFields = false;

function onFieldClick(element) {
    if (setFields) {
        console.log(element);
        table[element.id] = {
            name: prompt(),
            flipped: false
        }
        element.innerHTML = table[element.id].name;
        localStorage.bingocard = JSON.stringify(table);
    } else {
        if (table[element.id] != null) {
            if (confirm("Did you get this Object?")) {
                table[element.id].flipped = true;
                element.classList.add("flipped");
                localStorage.bingocard = JSON.stringify(table);
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
        localStorage.clear();
    }
}

function reload() {
    table = JSON.parse(localStorage.bingocard);
    if (table.length == 25) {
        for (let i = 0; i < 25; i++) {
            document.getElementById(i).innerHTML = table[i].name;
            if (table[i].flipped) {
                document.getElementById(i).classList.add("flipped");
            }
        }
    } else if (localStorage.bingocard != "") {
        console.log("Failed to load Storage")
        table = [];
    }
}
