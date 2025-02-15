function playHihat() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "e" || event.key === "E") {
        var hihat = document.getElementById("hihat");
        hihat.setAttribute("src", "dependencies/objects/hihat/hihatclosed.png");
        new Audio("dependencies/sounds/hihat.mp3").play();
        setTimeout(function () {
          hihat.setAttribute("src", "dependencies/objects/hihat/hihatopen.png");
        }, 100);
      }
    });
  }
  
  function clickHihat() {
    var hihat = document.getElementById("hihat");
    hihat.setAttribute("src", "dependencies/objects/hihat/hihatclosed.png");
    new Audio("dependencies/sounds/hihat.mp3").play();
    setTimeout(function () {
      hihat.setAttribute("src", "dependencies/objects/hihat/hihatopen.png");
    }, 100);
  }
  