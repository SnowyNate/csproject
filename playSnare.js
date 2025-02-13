function playSnare() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "k" || event.key === "K") {
      var snare = document.getElementById("snare");
      snare.setAttribute("src", "dependencies/snaredrumdown.png");
      new Audio("dependencies/snare.mp3").play();
      setTimeout(function () {
        snare.setAttribute("src", "dependencies/snaredrumup.png");
      }, 100);
    }
  });
}

function clickSnare() {
  var snare = document.getElementById("snare");
  snare.setAttribute("src", "dependencies/snaredrumdown.png");
  new Audio("dependencies/snare.mp3").play();
  setTimeout(function () {
    snare.setAttribute("src", "dependencies/snaredrumup.png");
  }, 100);
}
