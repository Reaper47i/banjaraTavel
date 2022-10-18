// function setMob() {
//   let width = window.innerWidth;
//   if (width <= 679) {
//     document.getElementById("navContents").className = "mobNavC";
//   } else {
//     document.getElementById("navContents").className = "normalNavC flexCenter";
//   }
// }

// The following functions are used for checking the veiwport
// config if its mobile or desktop or tablet

function resizeWindow() {
  let width = window.innerWidth;
  if (width <= 679) {
    document.getElementById("navContents").className = "mobNavC";
  } else {
    document.getElementById("navContents").className = "normalNavC flexCenter";
  }
}
addEventListener("DOMContentLoaded", resizeWindow);
addEventListener("resize", resizeWindow);

// let user = getElementById("loginBtn")
