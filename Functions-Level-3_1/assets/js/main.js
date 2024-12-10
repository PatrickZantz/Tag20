document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ball1").addEventListener("click", function () {
    document.getElementById("ball1").style.background =
      "linear-gradient(to bottom right, purple 50%, green 50%)";
  });

  document.getElementById("ball2").addEventListener("click", function () {
    document.getElementById("ball2").style.background =
      "linear-gradient(to bottom right, blue 50%, yellow 50%)";
  });

  document.getElementById("ball3").addEventListener("click", function () {
    document.getElementById("ball3").style.background =
      "linear-gradient(to bottom right, cyan 50%, orange 50%)";
  });

  document.getElementById("ball4").addEventListener("click", function () {
    document.getElementById("ball4").style.background =
      "linear-gradient(to bottom right, blue 50%, magenta 50%)";
  });
});
