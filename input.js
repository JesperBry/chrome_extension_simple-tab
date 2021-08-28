function render_html() {
  var nameStore = window.localStorage.getItem("name");
  if (nameStore) {
    document.getElementById("time").style.visibility = "visible";
    document.getElementById("dailyText").style.visibility = "visible";
    document.getElementById("input").style.visibility = "hidden";
  }
}

var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    save_to_storage();
    document.location.reload();
  }
});

function save_to_storage() {
  var name = document.getElementById("input").value;
  var storage = window.localStorage;
  storage.setItem("name", name);
  document.location.reload();
}

render_html();
