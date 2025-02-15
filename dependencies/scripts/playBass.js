function playBass() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "d" || event.key === "D") {
        var bass = document.getElementById("bass");
        bass.setAttribute("src", "dependencies/bassdrumdown.png");
        new Audio("dependencies/bass.mp3").play();
        setTimeout(function () {
          bass.setAttribute("src", "dependencies/bassdrumup.png");
        }, 100);
      }
    });
  }
  
  function clickBass() {
    var bass = document.getElementById("bass");
    bass.setAttribute("src", "dependencies/bassdrumdown.png");
    new Audio("dependencies/bass.mp3").play();
    setTimeout(function () {
      bass.setAttribute("src", "dependencies/bassdrumup.png");
    }, 100);
  }
  