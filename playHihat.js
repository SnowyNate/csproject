function playHihat() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "e" || event.key === "E") {
        var hihat = document.getElementById("hihat");
        hihat.setAttribute("src", "dependencies/hihatclosed.png");
        new Audio("dependencies/hihat.mp3").play();
        setTimeout(function () {
          hihat.setAttribute("src", "dependencies/hihatopen.png");
        }, 100);
      }
    });
  }
  
  function clickhihat() {
    var hihat = document.getElementById("hihat");
    hihat.setAttribute("src", "dependencies/hihatclosed.png");
    new Audio("dependencies/hihat.mp3").play();
    setTimeout(function () {
      hihat.setAttribute("src", "dependencies/hihatopen.png");
    }, 100);
  }
  