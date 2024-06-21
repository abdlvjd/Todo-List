const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value == '') {
        alert("You  must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // ee add aakkana li list containerl varaanum maandeett aahn list contaioner kodthadh

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    // input boxl add aakkyente shesham input box empty aavvaaan
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// ivvade eee false kodkkanadh endhinaaann ink manslaaaayeella (ee false illandim idh wrk aaavvnd)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    // idheeel data nn lladh listContainerle data local storagel store cheydheente name aaahn adh njammakk endhum kodkka
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();