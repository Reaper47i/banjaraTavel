// function setMob() {
//   let width = window.innerWidth;
//   if (width <= 679) {
//     document.getElementById("navContents").className = "mobNavC";
//   } else {
//     document.getElementById("navContents").className = "normalNavC flexCenter";
//   }
// }

function resizeWindow() {
  let width = window.innerWidth;
  if (width <= 679) {
    document.getElementById("navContents").className = "mobNavC";
  } else {
    document.getElementById("navContents").className = "normalNavC flexCenter";
  }
}
// addEventListener("DOMContentLoaded", setMob);
addEventListener("resize", resizeWindow);
