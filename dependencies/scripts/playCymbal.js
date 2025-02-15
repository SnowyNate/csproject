function playCymbal() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "f" || event.key === "F") {
        var cymbal = document.getElementById("cymbal");
        cymbal.setAttribute("src", "dependencies/objects/crashcymbal/crashcymbaldown.png");
        new Audio("dependencies/sounds/crashcymbal.wav").play();
        setTimeout(function () {
          cymbal.setAttribute("src", "dependencies/objects/crashcymbal/crashcymbalup.png");
        }, 100);
      }
    });
  }
  
  function clickCymbal() {
    var cymbal = document.getElementById("cymbal");
    cymbal.setAttribute("src", "dependencies/objects/crashcymbal/crashcymbaldown.png");
    new Audio("dependencies/sounds/crashcymbal.wav").play();
    setTimeout(function () {
      cymbal.setAttribute("src", "dependencies/objects/crashcymbal/crashcymbalup.png");
    }, 100);
  }
