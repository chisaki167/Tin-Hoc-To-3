var divBox = document.getElementById("presentationStage");
var btn1 = document.getElementById("fullscreenBtn");
var btn2 = document.getElementById("fsExitBtn");

function runFull() {
  if (document.fullscreenElement == null && document.webkitFullscreenElement == null) {
    if (divBox.requestFullscreen) {
      divBox.requestFullscreen();
    } else if (divBox.webkitRequestFullscreen) {
      divBox.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function stopFull() {
  if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

btn1.onclick = function() {
  runFull();
};

btn2.onclick = function() {
  stopFull();
};

window.onkeydown = function(e) {
  var k = e.key;
  if (k == "f" || k == "F" || k == "F5") {
    e.preventDefault();
    runFull();
  }
};