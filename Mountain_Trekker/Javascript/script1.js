document.addEventListener("DOMContentLoaded", function () {
    var blurBackground = document.querySelector(".blur-background");
    var content = document.querySelector(".content");
  
    window.addEventListener("scroll", function () {
      var scrollPos = window.scrollY;
      var blurValue = scrollPos / 100; // Adjust the divisor for a smoother or more aggressive blur effect
  
      blurBackground.style.filter = "blur(" + blurValue + "px)";
    });
  });
  