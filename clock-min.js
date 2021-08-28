function startTime() {
  var today = new Date();
  var hours = today.getHours();
  var min = today.getMinutes();
  min = checkTime(min);
  hours = checkHours(hours);
  document.getElementById("time").innerHTML = hours + ":" + min;
  text = getText(hours);

  setInterval(function () {
    startTime();
  }, 1000);
}

function checkHours(h) {
  if (h < 10) {
    h = "0" + h;
  }
  return h;
}

function checkTime(m) {
  if (m < 10) {
    m = "0" + m;
  }
  return m;
}

function getText(h) {
  var name = window.localStorage.getItem("name");
  if (h >= 6 && h < 12) {
    document.getElementById("dailyText").innerHTML =
      "Good morning, " + name + ".";
  }
  if (h >= 12 && h <= 18) {
    document.getElementById("dailyText").innerHTML =
      "Good afternoon, " + name + ".";
  }
  if (h > 18 && h <= 23) {
    document.getElementById("dailyText").innerHTML =
      "Good evening, " + name + ".";
  }
  if (h >= 0 && h < 6) {
    document.getElementById("dailyText").innerHTML =
      "Good night, " + name + ".";
  }
}

startTime();
