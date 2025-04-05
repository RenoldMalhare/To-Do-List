let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Please Enter Task.");
  } else {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData();
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
function showData() {
  ul.innerHTML = localStorage.getItem("data");
}
showData();
