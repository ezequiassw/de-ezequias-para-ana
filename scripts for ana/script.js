function moveButton() {
    var button = document.getElementById("sim-btn");
    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }
  
  function showMessage() {
    var response = document.getElementById("response");
    response.classList.remove("hidden");
  }
  