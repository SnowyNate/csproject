function playSnare() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "h" || event.key === "H") {
      document.getElementById("myButton").click();
      new Audio('dependencies/snare.mp3').play();
    }
  });
}

function clickSnare() {
  new Audio('dependencies/snare.mp3').play();
}