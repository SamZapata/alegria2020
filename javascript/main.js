console.log("Developed by @samzapata");

window.onscroll = function() {myFunction()};

var header = document.getElementById("scrollmenu-options");
var content = document.getElementById("projectTabContent");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.style.marginTop = "5rem";
  } else {
    header.classList.remove("sticky");
    content.style.marginTop = "0";
  }
}
