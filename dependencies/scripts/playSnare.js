function playSnare() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "k" || event.key === "K") {
      var snare = document.getElementById("snare");
      snare.setAttribute("src", "dependencies/objects/snaredrum/snaredrumdown.png");
      new Audio("dependencies/sounds/snare.mp3").play();
      setTimeout(function () {
        snare.setAttribute("src", "dependencies/objects/snaredrum/snaredrumup.png");
      }, 100);
    }
  });
}

function clickSnare() {
  var snare = document.getElementById("snare");
  snare.setAttribute("src", "dependencies/objects/snaredrum/snaredrumdown.png");
  new Audio("dependencies/sounds/snare.mp3").play();
  setTimeout(function () {
    snare.setAttribute("src", "dependencies/objects/snaredrum/snaredrumup.png");
  }, 100);
}
